import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PARTS, VEHICLES, CATEGORIES, normalize, searchParts, parseAssistantQuery,
  assistantRecommend, formatPrice, cartLines, cartCount, cartTotals,
  maintenanceFor, orderReference, translator,
} from '../core.js';

test('catalog is internally consistent', () => {
  assert.equal(PARTS.length, 24);
  const ids = new Set(PARTS.map((p) => p.id));
  assert.equal(ids.size, PARTS.length, 'part ids are unique');
  for (const part of PARTS) {
    assert.ok(part.name && part.oem && part.price > 0, `${part.id} has core fields`);
    assert.ok(CATEGORIES.some((c) => c.id === part.category), `${part.id} category exists`);
    for (const vid of part.compatible) assert.ok(VEHICLES.some((v) => v.id === vid), `${part.id} -> ${vid} exists`);
  }
});

test('normalize ignores accents and punctuation', () => {
  assert.equal(normalize('Plaquettes d’allumage'), 'plaquettes d allumage');
  assert.equal(normalize('FILTRE-À-HUILE'), 'filtre a huile');
});

test('search matches French text, OEM references and cross references', () => {
  assert.equal(searchParts('plaquettes')[0].part.id, 'p01');
  assert.equal(searchParts('04465-0K030')[0].part.id, 'p01');
  assert.equal(searchParts('KL148')[0].part.id, 'p06');
  assert.ok(searchParts('plaquettes', { vehicleId: 'tucson-2019' }).every((r) => r.part.id === 'p03'));
  assert.ok(searchParts('', { category: 'Freinage' }).every((r) => r.part.category === 'Freinage'));
  assert.deepEqual(searchParts('zzzzinconnu'), []);
});

test('assistant parses intent and returns compatible recommendations', () => {
  const parsed = parseAssistantQuery('plaquettes Toyota Hilux 2020');
  assert.equal(parsed.brand, 'toyota');
  assert.equal(parsed.model, 'hilux');
  assert.equal(parsed.year, 2020);
  assert.ok(parsed.keywords.includes('plaquette'));
  const result = assistantRecommend('plaquettes hilux 2020', 'hilux-2020');
  assert.ok(result.items.length > 0);
  assert.ok(result.items.every(({ part }) => part.compatible.includes('hilux-2020')));
  assert.match(result.explanation, /D’après/);
  const vin = assistantRecommend('1HGCM82633A004352 batterie', 'hilux-2020');
  assert.equal(vin.parsed.vin, '1HGCM82633A004352');
  assert.ok(vin.items.some(({ part }) => part.name.includes('Batterie')));
});

test('cart totals, savings and delivery are computed correctly', () => {
  const cart = [{ id: 'p01', qty: 2 }, { id: 'p04', qty: 1 }];
  assert.equal(cartLines(cart).length, 2);
  assert.equal(cartCount(cart), 3);
  const dakar = cartTotals(cart, 'dakar');
  assert.equal(dakar.subtotal, 41500);
  assert.equal(dakar.savings, 7000);
  assert.equal(dakar.delivery, 2500);
  assert.equal(dakar.total, 44000);
  assert.equal(cartTotals(cart, 'dakar', true).delivery, 7500);
  assert.equal(cartTotals([], 'abidjan').delivery, 0);
  assert.equal(cartTotals(cart, 'inconnue').delivery, 2500);
});

test('maintenance radar produces bounded, sorted statuses', () => {
  const items = maintenanceFor(VEHICLES[0]);
  assert.equal(items.length, 5);
  assert.deepEqual([...items].map((i) => i.remaining), [...items].map((i) => i.remaining).sort((a, b) => a - b));
  for (const item of items) {
    assert.ok(item.remaining > 0 && item.remaining <= item.intervalKm);
    assert.ok(['ok', 'soon', 'due'].includes(item.status));
  }
});

test('formatting, references and translation', () => {
  assert.equal(formatPrice(18500), '18 500 FCFA');
  assert.equal(formatPrice(18500, 'en'), '18,500 FCFA');
  assert.match(orderReference(12345), /^ML-[A-Z0-9]{8}$/);
  assert.equal(translator('fr')('home'), 'Accueil');
  assert.equal(translator('en')('home'), 'Home');
  assert.equal(translator('xx')('home'), 'Accueil');
});
