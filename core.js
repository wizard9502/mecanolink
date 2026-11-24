/**
 * MecanoLink — core data + pure logic.
 * No DOM, no network, no side effects: safe to import in the browser and in Node tests.
 * All commercial data below is fictional demo data.
 */

export const CURRENCY = 'FCFA';

export const CITIES = [
  { id: 'dakar', name: 'Dakar', delivery: 2500, eta: '24 h' },
  { id: 'thies', name: 'Thiès', delivery: 3500, eta: '24-48 h' },
  { id: 'saint-louis', name: 'Saint-Louis', delivery: 5000, eta: '48 h' },
  { id: 'kaolack', name: 'Kaolack', delivery: 5000, eta: '48 h' },
  { id: 'abidjan', name: 'Abidjan', delivery: 9000, eta: '3-5 j' },
  { id: 'bamako', name: 'Bamako', delivery: 9500, eta: '3-5 j' },
];

export const PAYMENTS = [
  { id: 'orange', name: 'Orange Money', short: 'OM', color: '#ff7900' },
  { id: 'wave', name: 'Wave', short: 'W', color: '#00b8de' },
  { id: 'mtn', name: 'MTN MoMo', short: 'M', color: '#ffcc00' },
  { id: 'cash', name: 'À la livraison', short: '₣', color: '#4ade80' },
];

export const VEHICLES = [
  {
    id: 'hilux-2020', brand: 'Toyota', model: 'Hilux', year: 2020,
    engine: '2.4L D-4D 4x4', plate: 'DK-4821-AM', km: 84500,
    spec: 'Golfe / Afrique', role: 'Principal', fuel: 'Diesel', color: '#f59e0b',
  },
  {
    id: 'tucson-2019', brand: 'Hyundai', model: 'Tucson', year: 2019,
    engine: '1.6 GDi', plate: 'DK-7742-BC', km: 62000,
    spec: 'Famille', role: 'Famille', fuel: 'Essence', color: '#38bdf8',
  },
  {
    id: '308-2018', brand: 'Peugeot', model: '308', year: 2018,
    engine: '1.6 HDi', plate: 'DK-1190-ED', km: 118000,
    spec: 'Taxi / urbain', role: 'Taxi', fuel: 'Diesel', color: '#a78bfa',
  },
];

export const CATEGORIES = [
  { id: 'Freinage', name: 'Freinage', icon: 'brake' },
  { id: 'Filtration', name: 'Filtration & Huile', icon: 'filter' },
  { id: 'Suspension', name: 'Suspension & Train', icon: 'shock' },
  { id: 'Moteur', name: 'Moteur & Injection', icon: 'engine' },
  { id: 'Électrique', name: 'Électrique', icon: 'bolt' },
  { id: 'Refroidissement', name: 'Refroidissement', icon: 'thermo' },
  { id: 'Transmission', name: 'Transmission', icon: 'gear' },
  { id: 'Carrosserie', name: 'Carrosserie', icon: 'body' },
];

/**
 * Catalog: 24 pieces, cross-references, regional spec, stock and service interval.
 * `compatible` holds vehicle ids; `oem` and `cross` are fictional references.
 */
export const PARTS = [
  { id: 'p01', name: 'Plaquettes de frein avant', category: 'Freinage', brand: 'Toyota', oem: '04465-0K030', cross: ['D1060-AD001', 'LPZ007'], price: 18500, oldPrice: 22000, stock: 12, rating: 4.8, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 40000, warranty: 12, badge: 'Renforcé poussière', desc: 'Formule céramique renforcée pour les routes poussiéreuses et les chargements lourds.' },
  { id: 'p02', name: 'Disques de frein avant (paire)', category: 'Freinage', brand: 'Toyota', oem: '43512-0K040', cross: ['DF4479', 'RBR008'], price: 42000, stock: 7, rating: 4.7, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 80000, warranty: 12, badge: 'Ventilé', desc: 'Disques ventilés traités anti-corrosion, épaisseur contrôlée.' },
  { id: 'p03', name: 'Plaquettes de frein arrière', category: 'Freinage', brand: 'Hyundai', oem: '58302-2EA00', cross: ['SP1249', 'LPZ211'], price: 16000, stock: 9, rating: 4.6, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 45000, warranty: 12, badge: 'Ouverture', desc: 'Jeu de 4 plaquettes avec capteur d’usure et graisse anti-grincement.' },
  { id: 'p04', name: 'Filtre à huile moteur', category: 'Filtration', brand: 'Toyota', oem: '90915-YZZE2', cross: ['W68/3', 'OC608'], price: 4500, stock: 48, rating: 4.9, compatible: ['hilux-2020', 'tucson-2019'], spec: 'Golfe / Afrique', intervalKm: 10000, warranty: 6, badge: 'Haute filtration', desc: 'Média multicouche : retient 98 % des particules dès 20 microns.' },
  { id: 'p05', name: 'Filtre à air', category: 'Filtration', brand: 'Toyota', oem: '17801-0L010', cross: ['A1418', 'WA5235'], price: 7200, oldPrice: 8900, stock: 31, rating: 4.7, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 20000, warranty: 6, badge: 'Anti-poussière', desc: 'Cartouche double couche, adaptée aux pistes et aux Harmattan.' },
  { id: 'p06', name: 'Filtre à carburant diesel', category: 'Filtration', brand: 'Peugeot', oem: '1901-87', cross: ['FCU2030', 'KL148'], price: 9800, stock: 22, rating: 4.6, compatible: ['308-2018', 'hilux-2020'], spec: 'Taxi / urbain', intervalKm: 20000, warranty: 6, badge: 'Séparateur d’eau', desc: 'Protège la pompe d’injection contre l’eau et les impuretés du gazole local.' },
  { id: 'p07', name: 'Filtre d’habitacle charbon', category: 'Filtration', brand: 'Hyundai', oem: '97133-2E200', cross: ['CUK2330', 'AC8068'], price: 8500, stock: 18, rating: 4.5, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 15000, warranty: 6, badge: 'Charbon actif', desc: 'Filtre antipollen et odeurs, utile en ville et lors des pics de poussière.' },
  { id: 'p08', name: 'Huile moteur 10W-30 (5 L)', category: 'Filtration', brand: 'Motul', oem: 'MOT-10W30-5L', cross: ['API-CF4', 'ACEA-A3'], price: 28500, stock: 26, rating: 4.9, compatible: ['hilux-2020', '308-2018'], spec: 'Golfe / Afrique', intervalKm: 10000, warranty: 0, badge: 'Tout climat', desc: 'Huile minérale haute tenue, formulée pour les températures sahéliennes.' },
  { id: 'p09', name: 'Amortisseur avant renforcé', category: 'Suspension', brand: 'Toyota', oem: '48511-0K080', cross: ['KG5431', 'MS110'], price: 34500, stock: 10, rating: 4.8, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 60000, warranty: 24, badge: 'Charges lourdes', desc: 'Amortisseur gaz à double piston pour pistes et chargements.' },
  { id: 'p10', name: 'Ressort de suspension arrière', category: 'Suspension', brand: 'Toyota', oem: '48220-0K010', cross: ['RC0213', 'LSK610'], price: 27000, stock: 8, rating: 4.6, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 70000, warranty: 18, badge: 'Renforcé', desc: 'Ressort hélicoïdal épais, traitement anti-sel et anti-abrasion.' },
  { id: 'p11', name: 'Barre stabilisatrice avant', category: 'Suspension', brand: 'Hyundai', oem: '54830-1G000', cross: ['SLS8160', 'B7060'], price: 22500, stock: 6, rating: 4.4, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 80000, warranty: 18, badge: 'Silentblocs inclus', desc: 'Barre complète avec silentblocs en polyuréthane renforcé.' },
  { id: 'p12', name: 'Rotule de suspension', category: 'Suspension', brand: 'Peugeot', oem: '3640-88', cross: ['SQ1091', 'JTI430'], price: 11500, stock: 15, rating: 4.5, compatible: ['308-2018'], spec: 'Taxi / urbain', intervalKm: 50000, warranty: 12, badge: 'Graphité', desc: 'Rotule étanche, graissage longue durée pour les mauvaises routes.' },
  { id: 'p13', name: 'Bougies d’allumage iridium (4)', category: 'Moteur', brand: 'Hyundai', oem: '18844-10160', cross: ['IKR20E8', 'SILZKFR8'], price: 19800, stock: 20, rating: 4.8, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 40000, warranty: 12, badge: 'Iridium', desc: 'Allumage stable à faible régime, réduction de la consommation urbaine.' },
  { id: 'p14', name: 'Injecteur diesel common rail', category: 'Moteur', brand: 'Peugeot', oem: '1980-45', cross: ['DLLA150P', 'EJBR01401'], price: 78000, stock: 4, rating: 4.7, compatible: ['308-2018'], spec: 'Taxi / urbain', intervalKm: 120000, warranty: 12, badge: 'Reconditionné + garantie', desc: 'Injecteur contrôlé sur banc, buse nettoyée et étalonnée.' },
  { id: 'p15', name: 'Pompe à eau moteur', category: 'Refroidissement', brand: 'Toyota', oem: '16100-09240', cross: ['WPQ856', 'GWT-72A'], price: 31500, stock: 9, rating: 4.6, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 90000, warranty: 12, badge: 'Joint inclus', desc: 'Corps aluminium, turbine renforcée et joint d’étanchéité fourni.' },
  { id: 'p16', name: 'Radiateur aluminium grand volume', category: 'Refroidissement', brand: 'Toyota', oem: '16400-0K230', cross: ['RDI2075', 'KA-2060'], price: 64500, oldPrice: 72000, stock: 5, rating: 4.8, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 120000, warranty: 18, badge: 'Grand volume', desc: 'Noyau aluminium 3 rangées conçu pour les longs trajets en plein soleil.' },
  { id: 'p17', name: 'Durite de radiateur haute', category: 'Refroidissement', brand: 'Peugeot', oem: '5750-FP', cross: ['DH1782', 'TCH404'], price: 8900, stock: 17, rating: 4.4, compatible: ['308-2018'], spec: 'Taxi / urbain', intervalKm: 60000, warranty: 12, badge: 'EPDM', desc: 'Durite renforcée résistante au glycol et aux hautes températures.' },
  { id: 'p18', name: 'Alternateur 12V 90A', category: 'Électrique', brand: 'Toyota', oem: '27060-0K030', cross: ['CAL35216', 'JA1132'], price: 56500, stock: 6, rating: 4.7, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 150000, warranty: 18, badge: 'Charge renforcée', desc: 'Régulateur intégré, adapté aux accessoires GPS et chargeurs multiples.' },
  { id: 'p19', name: 'Batterie 12V 70Ah', category: 'Électrique', brand: 'Varta', oem: 'BAT-70Ah-D', cross: ['EB70', 'DIN74'], price: 89000, stock: 11, rating: 4.9, compatible: ['hilux-2020', 'tucson-2019', '308-2018'], spec: 'Tous modèles', intervalKm: 80000, warranty: 24, badge: 'Démarrage renforcé', desc: 'Batterie sans entretien, haute résistance aux cycles de démarrage à chaud.' },
  { id: 'p20', name: 'Éclairage LED phare avant', category: 'Électrique', brand: 'Hyundai', oem: '92101-2E500', cross: ['LED-H4-60', 'LUM900'], price: 24000, stock: 13, rating: 4.6, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 100000, warranty: 18, badge: 'LED 6000K', desc: 'Feu LED homologué, faisceau large pour les routes non éclairées.' },
  { id: 'p21', name: 'Kit embrayage complet', category: 'Transmission', brand: 'Peugeot', oem: '2050-56', cross: ['KC603', 'CTR211'], price: 96000, oldPrice: 110000, stock: 3, rating: 4.8, compatible: ['308-2018'], spec: 'Taxi / urbain', intervalKm: 130000, warranty: 18, badge: 'Kit complet', desc: 'Disque, mécanisme et butée : montage direct sans reprise.' },
  { id: 'p22', name: 'Cardan transmission avant', category: 'Transmission', brand: 'Toyota', oem: '43430-0K010', cross: ['CVT8040', 'JAWA102'], price: 73500, stock: 4, rating: 4.7, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 140000, warranty: 18, badge: 'Soufflets inclus', desc: 'Cardan neuf avec soufflets et graisse, pour 4x4 et chargements.' },
  { id: 'p23', name: 'Rétroviseur extérieur droit', category: 'Carrosserie', brand: 'Hyundai', oem: '87620-2E000', cross: ['MRV8021', 'TYC512'], price: 29500, stock: 8, rating: 4.3, compatible: ['tucson-2019'], spec: 'Famille', intervalKm: 0, warranty: 12, badge: 'Prêt à peindre', desc: 'Rétroviseur électrique avec clignotant intégré.' },
  { id: 'p24', name: 'Pare-chocs avant renforcé', category: 'Carrosserie', brand: 'Toyota', oem: '52119-0K902', cross: ['BPH440', 'TUF130'], price: 118000, stock: 2, rating: 4.6, compatible: ['hilux-2020'], spec: 'Golfe / Afrique', intervalKm: 0, warranty: 12, badge: 'Acier 3 mm', desc: 'Pare-chocs renforcé avec plaque de protection et fixations incluses.' },
];

/** Service rules used by the maintenance radar. */
export const MAINTENANCE_RULES = [
  { id: 'huile', label: 'Vidange + filtre à huile', intervalKm: 10000, partIds: ['p04', 'p08'] },
  { id: 'filtre-air', label: 'Filtre à air', intervalKm: 20000, partIds: ['p05'] },
  { id: 'freins', label: 'Plaquettes de frein', intervalKm: 40000, partIds: ['p01', 'p03'] },
  { id: 'suspension', label: 'Contrôle suspension', intervalKm: 60000, partIds: ['p09', 'p11'] },
  { id: 'courroie', label: 'Courroie / accessoires', intervalKm: 80000, partIds: ['p18', 'p15'] },
];

export const GARAGES = [
  { id: 'g1', name: 'Garage Fadji Auto', area: 'Ouakam, Dakar', distance: 1.8, rating: 4.8, open: true, services: 'Mécanique générale', phone: '+221 00 000 00 01' },
  { id: 'g2', name: 'Atelier Kebba', area: 'Grand Dakar, Dakar', distance: 3.4, rating: 4.6, open: true, services: 'Freins & suspension', phone: '+221 00 000 00 02' },
  { id: 'g3', name: 'Auto Secours Sénégal', area: 'Colobane, Dakar', distance: 5.1, rating: 4.9, open: true, services: 'Dépannage 24/7', phone: '+221 00 000 00 03' },
];

/** Remove diacritics and punctuation noise so "plaquettes" matches "Plaquettes". */
export function normalize(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function findPart(id) {
  return PARTS.find((part) => part.id === id) ?? null;
}

export function findVehicle(id) {
  return VEHICLES.find((vehicle) => vehicle.id === id) ?? null;
}

/**
 * Score a part against a free-text query. Returns matched parts with reasons.
 * `filters` may contain vehicleId, category and maxPrice.
 */
export function searchParts(query, filters = {}, source = PARTS) {
  const tokens = normalize(query).split(' ').filter(Boolean);
  return source
    .map((part) => {
      let score = 0;
      const haystacks = [
        { text: normalize(part.name), weight: 6 },
        { text: normalize(part.brand), weight: 3 },
        { text: normalize(part.category), weight: 3 },
        { text: normalize(part.oem), weight: 5 },
        { text: normalize(part.cross.join(' ')), weight: 4 },
        { text: normalize(part.spec), weight: 2 },
        { text: normalize(part.badge), weight: 2 },
        { text: normalize(part.desc), weight: 1 },
      ];
      for (const token of tokens) {
        let tokenScore = 0;
        for (const h of haystacks) {
          if (!h.text) continue;
          if (h.text === token) tokenScore = Math.max(tokenScore, h.weight * 2);
          else if (h.text.includes(token)) tokenScore = Math.max(tokenScore, h.weight);
        }
        score += tokenScore;
      }
      return { part, score };
    })
    .filter(({ part }) => !filters.category || part.category === filters.category)
    .filter(({ part }) => !filters.vehicleId || part.compatible.includes(filters.vehicleId))
    .filter(({ part }) => !filters.maxPrice || part.price <= filters.maxPrice)
    .filter(({ score }) => !tokens.length || score > 0)
    .sort((a, b) => b.score - a.score || b.part.rating - a.part.rating || a.part.price - b.part.price);
}

/** Parse a natural-language request into structured intent for the VIN/IA assistant. */
export function parseAssistantQuery(query) {
  const text = normalize(query);
  const brand = VEHICLES.map((v) => normalize(v.brand)).find((b) => text.includes(b)) ?? null;
  const model = VEHICLES.map((v) => normalize(v.model)).find((m) => text.includes(m)) ?? null;
  const yearMatch = text.match(/\b(20\d{2}|19\d{2})\b/);
  const vinMatch = text.match(/\b[a-hj-npr-z0-9]{17}\b/i);
  const category = CATEGORIES.find((c) => text.includes(normalize(c.name)))?.id ?? null;
  const keywords = ['plaquette', 'frein', 'huile', 'filtre', 'amortisseur', 'batterie', 'courroie', 'injecteur', 'radiateur', 'alternateur', 'embrayage']
    .filter((k) => text.includes(k));
  return {
    text, brand, model, year: yearMatch ? Number(yearMatch[1]) : null,
    vin: vinMatch ? vinMatch[0].toUpperCase() : null,
    category, keywords,
  };
}

/**
 * The assistant: matches a request to the best parts and writes a plain explanation.
 * Deliberately local/deterministic — no external AI call, no fabricated live data.
 */
export function assistantRecommend(query, vehicleId) {
  const parsed = parseAssistantQuery(query);
  const vehicle = findVehicle(vehicleId) ?? VEHICLES[0];
  let candidates = PARTS.filter((p) => p.compatible.includes(vehicle.id));

  if (parsed.brand) {
    const matching = candidates.filter((p) => normalize(p.brand).includes(parsed.brand) || normalize(vehicle.brand).includes(parsed.brand));
    if (matching.length) candidates = matching;
  }
  if (parsed.category) {
    const matching = candidates.filter((p) => p.category === parsed.category);
    if (matching.length) candidates = matching;
  }
  const keywordHits = candidates.filter((p) => parsed.keywords.some((k) => normalize(`${p.name} ${p.category}`).includes(k)));
  if (keywordHits.length) candidates = keywordHits;

  const ranked = candidates
    .map((part) => ({ part, score: part.rating * 2 + (part.stock > 0 ? 2 : -4) + (part.oldPrice ? 1 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const bits = [];
  if (parsed.vin) bits.push(`VIN ${parsed.vin}`);
  if (parsed.brand || parsed.model) bits.push(`${parsed.brand ?? ''} ${parsed.model ?? ''}`.trim());
  if (parsed.year) bits.push(`année ${parsed.year}`);
  bits.push(`${vehicle.brand} ${vehicle.model} ${vehicle.year} (profil actif)`);
  if (parsed.keywords.length) bits.push(`besoin : ${parsed.keywords.join(', ')}`);

  return {
    parsed,
    items: ranked,
    explanation: ranked.length
      ? `D’après ${bits.join(' · ')}, voici les ${ranked.length} pièces les plus pertinentes, compatibles avec votre véhicule.`
      : `Aucune pièce ne correspond à cette demande pour le ${vehicle.brand} ${vehicle.model}. Essayez « plaquettes », « filtre à huile » ou « batterie ».`,
  };
}

export function formatPrice(value, lang = 'fr') {
  const formatted = new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'fr-FR', {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
  return `${formatted} ${CURRENCY}`;
}

export function cartLines(cart, source = PARTS) {
  return (cart ?? [])
    .map(({ id, qty }) => {
      const part = findPart(id) ?? source.find((p) => p.id === id);
      return part ? { part, qty: Math.max(1, Number(qty) || 1) } : null;
    })
    .filter(Boolean);
}

export function cartCount(cart) {
  return cartLines(cart).reduce((sum, line) => sum + line.qty, 0);
}

export function cartTotals(cart, cityId = 'dakar', express = false) {
  const city = CITIES.find((c) => c.id === cityId) ?? CITIES[0];
  const lines = cartLines(cart);
  const subtotal = lines.reduce((sum, line) => sum + line.part.price * line.qty, 0);
  const savings = lines.reduce((sum, line) => sum + ((line.part.oldPrice ?? line.part.price) - line.part.price) * line.qty, 0);
  const delivery = subtotal === 0 ? 0 : (express ? 7500 : city.delivery);
  return { subtotal, savings, delivery, total: subtotal + delivery, eta: express ? '2 h' : city.eta, lines };
}

/**
 * Maintenance status for one vehicle.
 * `phase` shifts the hypothetical last-service points for demo purposes.
 */
export function maintenanceFor(vehicle, rules = MAINTENANCE_RULES, phase = 0.37) {
  return rules.map((rule, index) => {
    const lastService = Math.round((vehicle.km * (0.25 + index * 0.11) * (1 - phase)) / 1000) * 1000;
    const travelled = Math.max(0, vehicle.km - lastService);
    const remaining = rule.intervalKm - (travelled % rule.intervalKm);
    const ratio = remaining / rule.intervalKm;
    const status = ratio <= 0.12 ? 'due' : ratio <= 0.3 ? 'soon' : 'ok';
    return { ...rule, remaining, ratio, status, parts: rule.partIds.map(findPart).filter(Boolean) };
  }).sort((a, b) => a.remaining - b.remaining);
}

export function orderReference(seed = Date.now()) {
  const base = Math.abs(Math.floor(seed)).toString(36).toUpperCase().padStart(8, '0').slice(-8);
  return `ML-${base}`;
}

export const I18N = {
  fr: {
    home: 'Accueil', catalog: 'Catalogue', garage: 'Garage', orders: 'Commandes', profile: 'Profil',
    search: 'Rechercher une pièce, une réf OEM, une marque…', assistant: 'VIN / IA',
    sos: 'SOS 24/7', favorites: 'Favoris', cart: 'Panier', myCars: 'Mes autos',
    add: 'Ajouter', added: 'Ajouté au panier', viewAll: 'Voir tout', results: 'résultats',
    compatible: 'Compatible', inStock: 'en stock', checkout: 'Payer', total: 'Total',
    delivery: 'Livraison', subtotal: 'Sous-total', continue: 'Continuer', close: 'Fermer',
    due: 'À faire', soon: 'Bientôt', ok: 'OK', km: 'km', welcome: 'Bonjour, Mo 👋',
    tagline: 'La bonne pièce. Au bon endroit. Sur votre route.',
    demo: 'Démo — données fictives', emptyCart: 'Votre panier est vide',
  },
  en: {
    home: 'Home', catalog: 'Catalog', garage: 'Garage', orders: 'Orders', profile: 'Profile',
    search: 'Search a part, OEM ref, brand…', assistant: 'VIN / AI',
    sos: 'SOS 24/7', favorites: 'Favorites', cart: 'Cart', myCars: 'My cars',
    add: 'Add', added: 'Added to cart', viewAll: 'See all', results: 'results',
    compatible: 'Fits', inStock: 'in stock', checkout: 'Pay', total: 'Total',
    delivery: 'Delivery', subtotal: 'Subtotal', continue: 'Continue', close: 'Close',
    due: 'Due', soon: 'Soon', ok: 'OK', km: 'km', welcome: 'Hello, Mo 👋',
    tagline: 'The right part. In the right place. On your road.',
    demo: 'Demo — fictional data', emptyCart: 'Your cart is empty',
  },
};

export function translator(lang = 'fr') {
  const dict = I18N[lang] ?? I18N.fr;
  return (key) => dict[key] ?? I18N.fr[key] ?? key;
}
