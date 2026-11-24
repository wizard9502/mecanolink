import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('hidden attribute beats layout classes', () => {
  assert.match(css, /\[hidden\]\s*\{[^}]*display:\s*none\s*!important/);
});

test('modal layer starts hidden in the markup', () => {
  assert.match(html, /id="sheetRoot"[^>]*\bhidden\b/);
});
