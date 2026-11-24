/**
 * MecanoLink UI — vanilla ES modules, no build step.
 * Everything runs locally; checkout, SOS and AI assistant are simulations.
 */
import {
  PARTS, VEHICLES, CATEGORIES, CITIES, PAYMENTS, GARAGES, MAINTENANCE_RULES, BRANDS, REGION_TIPS,
  findPart, findVehicle, searchParts, assistantRecommend, formatPrice,
  cartLines, cartCount, cartTotals, maintenanceFor, orderReference, translator, normalize,
} from './core.js';
import { extraHome, brandsSheetHtml, sellersView } from './extra.js';

const REPO_URL = 'https://github.com/wizard9502/mecanolink';
const KEY = 'mecanolink.v1';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const ICON_ALIAS = {"snowflake":"thermo","circle":"gear","wind":"filter","compass":"pin"};
const ICONS = {
  brake: '<path d="M12 3v18M5 7l-2 4a8 8 0 0 0 18 0l-2-4M5 7h14"/><circle cx="12" cy="12" r="2"/>',
  filter: '<path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z"/>',
  shock: '<path d="M8 3h8M8 21h8M9 3l6 18M15 3 9 21"/><path d="M7 9h10M7 15h10"/>',
  engine: '<path d="M5 9h3V6h8v3h3v7h-3v3H8v-3H5V9Z"/><path d="M9 6V3h4v3M9 19v2M15 19v2"/>',
  bolt: '<path d="m13 2-9 11h7l-1 9 9-11h-7l1-9Z"/>',
  thermo: '<path d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0Z"/><path d="M12 9v6"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-4v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 13.5H3v-3h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3.1V3h4v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v3h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  body: '<path d="M4 16v-5l2-5h12l2 5v5M4 16h3l1-3h8l1 3h3M6 9h12M7 16v3M17 16v3"/>',
  car: '<path d="M5 17h14M4 17v-4l2-6h12l2 6v4H4Z"/><circle cx="8" cy="17" r="2"/><circle cx="16" cy="17" r="2"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  truck: '<path d="M3 6h11v11H3V6ZM14 10h4l3 3v4h-7v-7Z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  wrench: '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18v3h3l5.3-5.3a5 5 0 0 0 6.4-6.4L15 12l-3-3 2.7-2.7Z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/>',
};
function icon(name, cls = '') {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[ICON_ALIAS[name] || name] ?? ICONS.info}</svg>`;
}
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------------- state ---------------- */
const defaults = { view: 'home', lang: 'fr', city: 'dakar', vehicleId: VEHICLES[0].id, cart: [], favorites: [], orders: [], query: '', category: null, brand: null, allVehicles: false, sellerQuery: '', sellerRegion: '', accent: 'orange', sort: 'pertinence', payment: 'orange', express: false, installDismissed: false };
let state = { ...defaults };
try {
  const saved = JSON.parse(localStorage.getItem(KEY) ?? '{}');
  state = { ...defaults, ...saved, cart: saved.cart ?? [], favorites: saved.favorites ?? [], orders: saved.orders ?? [] };
  if (!findVehicle(state.vehicleId)) state.vehicleId = VEHICLES[0].id;
} catch { state = { ...defaults }; }
let t = translator(state.lang);
document.documentElement.dataset.accent = state.accent === 'lime' ? 'lime' : 'orange';
let sheetCleanup = null;
let deferredPrompt = null;
let sosActive = false;

function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ ...state, view: 'home', query: '', category: null })); } catch { /* private mode */ }
}
const activeVehicle = () => findVehicle(state.vehicleId) ?? VEHICLES[0];
const price = (n) => formatPrice(n, state.lang);
const catOf = (id) => CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];

/* ---------------- feedback ---------------- */
function toast(message) {
  const root = $('#toastRoot');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<svg class="ml-check" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m7 12 3.2 3.2L17 8.5"/></svg><span>${esc(message)}</span>`;
  root.append(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 220); }, 2600);
}
function openSheet(html, cleanup = null) {
  closeSheet();
  const root = $('#sheetRoot');
  root.hidden = false;
  root.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-label="Panneau"><div class="sheet-grip"></div>${html}</div>`;
  sheetCleanup = cleanup;
  document.body.style.overflow = 'hidden';
  const first = root.querySelector('input, button, select');
  if (first) first.focus({ preventScroll: true });
}
function closeSheet() {
  const root = $('#sheetRoot');
  root.hidden = true;
  root.innerHTML = '';
  document.body.style.overflow = '';
  if (sheetCleanup) { sheetCleanup(); sheetCleanup = null; }
}
function sheetHead(title, subtitle = '') {
  return `<div class="sheet-head"><div><h2>${esc(title)}</h2>${subtitle ? `<p>${esc(subtitle)}</p>` : ''}</div><button class="sheet-close" type="button" data-action="close-sheet" aria-label="${esc(t('close'))}">×</button></div>`;
}
function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const wrap = document.createElement('div');
  wrap.className = 'confetti';
  const colors = ['#ff8a1f', '#ffc04a', '#35d39a', '#60a5fa', '#ff6b6b'];
  for (let i = 0; i < 70; i++) {
    const bit = document.createElement('i');
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.background = colors[i % colors.length];
    bit.style.animationDelay = `${Math.random() * .7}s`;
    bit.style.animationDuration = `${1.8 + Math.random()}s`;
    wrap.append(bit);
  }
  document.body.append(wrap);
  setTimeout(() => wrap.remove(), 3400);
}

/* ---------------- pieces of UI ---------------- */
function partCard(part) {
  const fav = state.favorites.includes(part.id);
  const inCart = state.cart.some((line) => line.id === part.id);
  return `<article class="part-card">
    <button class="fav-toggle ${fav ? 'on' : ''}" type="button" data-action="fav" data-id="${part.id}" aria-label="Favori ${esc(part.name)}">${icon('heart')}</button>
    <span class="part-badge">${esc(part.badge)}</span>
    <button class="art" type="button" data-action="open-part" data-id="${part.id}" aria-label="Voir ${esc(part.name)}">
      <img src="${esc(part.photo)}" alt="${esc(part.name)}" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
      <span class="art-fallback" hidden>${icon(catOf(part.category).icon)}</span>
    </button>
    <h3 class="part-name">${esc(part.name)}</h3>
    <div class="part-ref">RÉF ${esc(part.oem)}</div>
    <div class="part-meta"><span class="stars">★ ${part.rating.toFixed(1)}</span><span>·</span><span>${part.stock} ${esc(t('inStock'))}</span></div>
    <div class="part-bottom"><div class="price">${price(part.price)}${part.oldPrice ? `<small>${price(part.oldPrice)}</small>` : ''}</div></div>
    <button class="add-bar" type="button" data-action="${inCart ? 'open-cart' : 'add'}" data-id="${part.id}">${icon(inCart ? 'check' : 'plus')} ${inCart ? 'Dans le panier' : esc(t('add'))}</button>
  </article>`;
}
function radarCard() {
  const vehicle = activeVehicle();
  const items = maintenanceFor(vehicle).slice(0, 3);
  return `<div class="radar">
    <div class="radar-top"><h3>Radar d’entretien</h3><span>${esc(vehicle.brand)} ${esc(vehicle.model)} · ${vehicle.km.toLocaleString('fr-FR')} ${esc(t('km'))}</span></div>
    <div class="radar-list">${items.map((item) => {
      const colors = { due: '#ff6b6b', soon: '#ffc04a', ok: '#35d39a' };
      const pct = Math.max(5, Math.round((1 - item.ratio) * 100));
      return `<div class="radar-item">
        <div class="ring" style="--ring-color:${colors[item.status]};--pct:${pct}"><span>${pct}%</span></div>
        <div><div class="label">${esc(item.label)}</div><small>${item.remaining.toLocaleString('fr-FR')} ${esc(t('km'))} restants</small></div>
        <span class="status ${item.status}">${esc(t(item.status))}</span>
      </div>`;
    }).join('')}</div>
  </div>`;
}
function renderVehicleBar() {
  const v = activeVehicle();
  $('#vehicleBar').innerHTML = `<button class="vehicle-bar" type="button" data-action="open-vehicles" style="width:calc(100% - 32px);text-align:left" aria-label="Changer de véhicule">
    <span class="vehicle-avatar">${icon('car')}</span>
    <span class="vehicle-main">
      <span class="vehicle-title"><i class="dot"></i>${esc(v.brand)} ${esc(v.model)} (${v.year}) <span class="tag">${esc(v.spec)}</span></span>
      <span class="vehicle-meta">${esc(v.engine)} · ${esc(v.plate)} · ${v.km.toLocaleString('fr-FR')} ${esc(t('km'))}</span>
    </span>
    <span class="vehicle-side"><span class="link-btn">${esc(t('myCars'))} ▾</span><span class="online"><i></i> EN LIGNE</span></span>
  </button>`;
}
function filteredParts() {
  const filters = { vehicleId: state.allVehicles ? undefined : state.vehicleId, category: state.category || undefined };
  const results = searchParts(state.query, filters).filter(({ part }) => !state.brand || part.brand === state.brand);
  if (state.sort === 'price') results.sort((a, b) => a.part.price - b.part.price);
  else if (state.sort === 'rating') results.sort((a, b) => b.part.rating - a.part.rating);
  else if (state.sort === 'stock') results.sort((a, b) => b.part.stock - a.part.stock);
  return results;
}
function partGrid(parts) {
  if (!parts.length) return `<div class="empty">${icon('info')}<p>Aucune pièce pour ces filtres. Essayez une autre catégorie ou un autre véhicule.</p></div>`;
  return `<div class="grid">${parts.map(({ part }) => partCard(part)).join('')}</div>`;
}

/* ---------------- views ---------------- */
function viewHome() {
  const v = activeVehicle();
  const featured = searchParts('', { vehicleId: v.id }).slice(0, 6);
  return `<section class="hero" data-enter>
      <span class="hero-kicker">● DÉMO INTERACTIVE · SÉNÉGAL</span>
      <h1>La bonne pièce. <em>Votre route.</em></h1>
      <p>${esc(t('tagline'))} Pièces compatibles, dépannage 24/7 et paiement Mobile Money.</p>
      <div class="hero-actions">
        <button class="btn primary" type="button" data-action="go" data-view="catalog">Explorer le catalogue ${icon('cart')}</button>
        <button class="btn ghost" type="button" data-action="open-assistant">${icon('spark')} Assistant VIN</button>
      </div>
    </section>
    <div class="stat-strip">
      <div class="stat"><strong>${PARTS.length}</strong><span>pièces en stock</span></div>
      <div class="stat"><strong>${BRANDS.length}</strong><span>marques couvertes</span></div>
      <div class="stat"><strong>${CITIES.length}</strong><span>villes desservies</span></div>
    </div>
${extraHome()}
    <section class="section"><div class="section-head"><h2>Entretien malin</h2><p>suivi automatique</p></div>${radarCard()}</section>
    <section class="section"><div class="section-head"><h2>Par catégorie</h2><p>${esc(t('viewAll'))}</p></div>
      <div class="chips">${CATEGORIES.map((c) => `<button class="chip" type="button" data-action="category" data-id="${c.id}">${icon(c.icon)}${esc(c.name)}</button>`).join('')}</div>
    </section>
    <section class="section"><div class="section-head"><h2>Pour votre ${esc(v.model)}</h2><p>compatibilité garantie</p></div>${partGrid(featured)}</section>
    <div class="banner-row"><span class="mini-badge hot">77 MARQUES</span><span class="mini-badge green">200 PIÈCES HD</span><span class="mini-badge">GPS & MOBILE MONEY</span><span class="mini-badge">SOS 24/7</span></div>
    <p style="font-size:10px;color:var(--muted);margin-top:14px">${esc(t('demo'))} · <a href="${REPO_URL}" target="_blank" rel="noopener" style="color:var(--accent)">Code source</a></p>`;
}
function viewCatalog() {
  const results = filteredParts();
  return `<section class="section" style="margin-top:14px">
      <div class="section-head"><div><h2>Catalogue</h2><p>${results.length} ${esc(t('results'))} · ${esc(activeVehicle().brand)} ${esc(activeVehicle().model)}</p></div>
        <button class="btn sm ghost" type="button" data-action="open-vehicles">Changer</button><button class="btn sm ${state.allVehicles ? 'primary' : 'ghost'}" type="button" data-action="toggle-all">Tous véhicules</button></div>
      <div class="chips"><button class="chip ${!state.category ? 'active' : ''}" type="button" data-action="category" data-id="">Tout</button>
        ${CATEGORIES.map((c) => `<button class="chip ${state.category === c.id ? 'active' : ''}" type="button" data-action="category" data-id="${c.id}">${icon(c.icon)}${esc(c.name)}</button>`).join('')}</div>
      <div class="sort-row"><span>Trier :</span>
        ${[['pertinence','Pertinence'],['price','Prix croissant'],['rating','Mieux notées'],['stock','En stock']].map(([id,label]) => `<button class="sort-btn ${state.sort === id ? 'active' : ''}" type="button" data-action="sort" data-id="${id}">${label}</button>`).join('')}
      </div>
      ${state.brand ? `<p style="margin:12px 0 0;font-size:11px;color:var(--muted)">Marque : <strong style="color:var(--text)">${esc(state.brand)}</strong> · <button class="link-btn" type="button" data-action="clear-brand">retirer</button></p>` : '' }
      ${state.query ? `<p style="margin:12px 0 0;font-size:11px;color:var(--muted)">Recherche : <strong style="color:var(--text)">« ${esc(state.query)} »</strong> · <button class="link-btn" type="button" data-action="clear-query">effacer</button></p>` : ''}
      <div style="margin-top:12px">${partGrid(results)}</div>
    </section>`;
}
function viewGarage() {
  const v = activeVehicle();
  const items = maintenanceFor(v);
  return `<section class="section" style="margin-top:14px">
    <div class="section-head"><h2>Mon garage</h2><p>${VEHICLES.length} véhicules</p></div>
    ${VEHICLES.map((veh) => `<article class="vehicle-card ${veh.id === v.id ? 'active' : ''}" style="--vehicle-color:${veh.color}">
      <div class="row"><div><div class="vehicle-name">${esc(veh.brand)} ${esc(veh.model)} ${veh.year}</div><div class="vehicle-sub">${esc(veh.engine)} · ${esc(veh.spec)} · ${esc(veh.role)}</div></div>
        ${veh.id === v.id ? '<span class="status ok">Actif</span>' : `<button class="btn sm" type="button" data-action="select-vehicle" data-id="${veh.id}">Choisir</button>`}</div>
      <div class="mileage"><label for="km-${veh.id}" style="font-size:10px;color:var(--muted)">Kilométrage</label><input id="km-${veh.id}" type="number" min="0" step="500" value="${veh.km}" data-km="${veh.id}"><span style="font-size:10px;color:var(--muted)">${esc(t('km'))}</span></div>
      ${veh.id === v.id ? `<div class="timeline">${items.map((it) => `<div class="timeline-item" style="--dot:${it.status === 'due' ? '#ff6b6b' : it.status === 'soon' ? '#ffc04a' : '#35d39a'}">${esc(it.label)} · <strong>${it.remaining.toLocaleString('fr-FR')} ${esc(t('km'))}</strong></div>`).join('')}</div>` : ''}
    </article>`).join('')}
    <div class="list-card"><h3>État du véhicule</h3><p>Un score indicatif calculé à partir des intervalles d’entretien et du kilométrage. Modifiez le kilométrage pour voir le radar réagir.</p></div>
  </section>`;
}
function viewOrders() {
  const orders = [...state.orders].reverse();
  if (!orders.length) {
    orders.push({ ref: 'ML-DEMO01', date: '12/11/2026', items: [{ id: 'p04', qty: 1 }, { id: 'p01', qty: 1 }], total: 23000, city: 'dakar', status: 'Livrée', paid: 'Orange Money' });
  }
  return `<section class="section" style="margin-top:14px">
    <div class="section-head"><h2>Commandes</h2><p>suivi & réachat</p></div>
    ${orders.map((o) => `<article class="list-card">
      <div class="row"><div><h3>${esc(o.ref)}</h3><p>${esc(o.date)} · ${esc(CITIES.find((c) => c.id === o.city)?.name ?? o.city)} · ${esc(o.paid ?? '')}</p></div><span class="status ${o.status === 'Livrée' ? 'ok' : 'soon'}">${esc(o.status)}</span></div>
      <div class="divider"></div>
      ${o.items.map((it) => { const p = findPart(it.id); return p ? `<div class="kv"><span>${esc(p.name)} ×${it.qty}</span><strong>${price(p.price * it.qty)}</strong></div>` : ''; }).join('')}
      <div class="kv"><span>Total payé</span><strong>${price(o.total)}</strong></div>
      <button class="btn sm full" style="margin-top:9px" type="button" data-action="reorder" data-ref="${esc(o.ref)}">Commander à nouveau</button>
    </article>`).join('')}
  </section>`;
}
function viewSellers() { return sellersView(state.sellerQuery, state.sellerRegion); }

function viewProfile() {
  return `<section class="section" style="margin-top:14px">
    <div class="list-card"><div class="row"><div><h3>Bonjour, Mo 👋</h3><p>Compte démo · ${esc(CITIES.find((c) => c.id === state.city)?.name ?? '')}</p></div><span class="status ok">En ligne</span></div></div>
    <div class="list-card"><h3>Préférences</h3>
      <div class="divider"></div>
      <div class="kv"><span>Thème d’accent</span><button class="link-btn" type="button" data-action="accent">${state.accent === 'lime' ? 'Vert néon' : 'Orange'} ↔</button></div>
      <div class="kv"><span>Langue</span><button class="link-btn" type="button" data-action="lang">${state.lang === 'fr' ? 'Français' : 'English'} ↔</button></div>
      <div class="kv"><span>Ville de livraison</span><button class="link-btn" type="button" data-action="open-city">${esc(CITIES.find((c) => c.id === state.city)?.name ?? '')} ▾</button></div>
      <div class="kv"><span>Paiement par défaut</span><button class="link-btn" type="button" data-action="open-cart">${esc(PAYMENTS.find((p) => p.id === state.payment)?.name ?? '')} ▾</button></div>
    </div>
    <div class="list-card"><h3>À propos de cette démo</h3><p style="margin-top:6px">Catalogue, prix, garages et paiements sont fictifs. Aucune transaction réelle n’est effectuée. Les données restent dans votre navigateur.</p>
      <div class="divider"></div>
      <div class="row"><a class="btn sm" href="${REPO_URL}" target="_blank" rel="noopener">Voir le code sur GitHub</a><button class="btn sm danger" type="button" data-action="reset">Réinitialiser</button></div>
    </div>
    <p style="font-size:10px;color:var(--muted);text-align:center">MecanoLink v1.0 · ${esc(t('demo'))}</p>
  </section>`;
}

function render() {
  t = translator(state.lang);
  document.documentElement.lang = state.lang;
  $('#cityLabel').textContent = CITIES.find((c) => c.id === state.city)?.name ?? 'Dakar';
  $('#langBtn').textContent = state.lang.toUpperCase();
  $('#searchInput').placeholder = t('search');
  $('#view').innerHTML = ({ home: viewHome, catalog: viewCatalog, garage: viewGarage, orders: viewOrders, profile: viewProfile, sellers: viewSellers })[state.view]();
  $$('#bottomNav button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === state.view);
    $('span', btn).textContent = t(btn.dataset.view);
  });
  renderVehicleBar();
  const cc = cartCount(state.cart), fc = state.favorites.length;
  const cb = $('#cartCount'), fb = $('#favCount');
  cb.textContent = cc; cb.hidden = !cc;
  fb.textContent = fc; fb.hidden = !fc;
  if (!$('#installBanner').hidden) $('#installBanner').hidden = true;
  if (deferredPrompt && !state.installDismissed && state.view === 'home') $('#installBanner').hidden = false;
  const bar = $('#cartBar');
  if (!bar) return;
  bar.hidden = cc === 0;
  if (cc) {
    const totals = cartTotals(state.cart, state.city, state.express);
    $('#cartBarText').textContent = `${cc} article${cc > 1 ? 's' : ''} · ${price(totals.total)}`;
  }
}

/* ---------------- sheets ---------------- */
function sheetVehicles() {
  openSheet(`${sheetHead(t('myCars'), 'La compatibilité des pièces suit ce véhicule')}
    ${VEHICLES.map((v) => `<button class="list-card" style="width:100%;text-align:left" type="button" data-action="select-vehicle" data-id="${v.id}">
      <div class="row"><div><h3>${esc(v.brand)} ${esc(v.model)} ${v.year}</h3><p>${esc(v.engine)} · ${esc(v.spec)} · ${v.km.toLocaleString('fr-FR')} ${esc(t('km'))}</p></div>${v.id === state.vehicleId ? '<span class="status ok">Actif</span>' : ''}</div>
    </button>`).join('')}`);
}
function sheetCities() {
  openSheet(`${sheetHead('Ville de livraison', 'Frais et délai estimés')}
    ${CITIES.map((c) => `<button class="list-card" style="width:100%;text-align:left" type="button" data-action="select-city" data-id="${c.id}">
      <div class="row"><div><h3>${esc(c.name)}</h3><p>Livraison ${price(c.delivery)} · ${esc(c.eta)}</p></div>${c.id === state.city ? '<span class="status ok">Actuelle</span>' : ''}</div>
    </button>`).join('')}`);
}
function sheetFavorites() {
  const parts = state.favorites.map(findPart).filter(Boolean);
  openSheet(`${sheetHead(t('favorites'), `${parts.length} pièce(s)`)}
    ${parts.length ? parts.map((p) => `<div class="assistant-result"><div class="row"><div><strong>${esc(p.name)}</strong><p style="margin:0;color:var(--muted);font-size:11px">${esc(p.oem)} · ${price(p.price)}</p></div>
      <button class="btn sm primary" type="button" data-action="add" data-id="${p.id}">${esc(t('add'))}</button></div></div>`).join('') : `<div class="empty">${icon('heart')}<p>Aucun favori pour l’instant.</p></div>`}`);
}
function sheetPart(id) {
  const p = findPart(id);
  if (!p) return;
  openSheet(`${sheetHead(p.name, `${p.brand} · ${catOf(p.category).name}`)}
    <div class="part-hero"><img src="${esc(p.photo)}" alt="${esc(p.name)}"><span class="part-badge">${esc(p.badge)}</span></div>
    <p style="font-size:12px;color:#d3d6d9;margin:12px 0">${esc(p.desc)}</p>
    <div class="kv"><span>Référence OEM</span><strong>${esc(p.oem)}</strong></div>
    <div class="kv"><span>Références croisées</span><strong>${esc(p.cross.join(' · '))}</strong></div>
    <div class="kv"><span>Compatibilité</span><strong>${p.compatible.map((vid) => { const v = findVehicle(vid); return v ? `${v.brand} ${v.model} ${v.year}` : vid; }).join(', ')}</strong></div>
    <div class="kv"><span>Stock</span><strong>${p.stock} pièces</strong></div>
    <div class="kv"><span>Garantie</span><strong>${p.warranty || 0} mois</strong></div>
    <div class="kv"><span>Clientèle</span><strong>${esc(p.spec)}</strong></div>
    <div class="total-box"><div class="big">${price(p.price)}</div><small>${p.oldPrice ? `Au lieu de ${price(p.oldPrice)} · économie ${price(p.oldPrice - p.price)}` : 'Prix démo'}</small></div>
    <div class="row"><button class="btn primary full" type="button" data-action="add" data-id="${p.id}">${icon('plus')} ${esc(t('add'))} au panier</button>
      <button class="btn" type="button" data-action="fav" data-id="${p.id}">${icon('heart')}</button></div>`);
}
function sheetAssistant() {
  openSheet(`${sheetHead('Assistant VIN / IA', 'Recherche locale intelligente — aucune donnée envoyée')}
    <form id="assistantForm"><label class="field"><span>Décrivez votre besoin</span><input name="q" placeholder="Ex. plaquettes Hilux 2020, ou 1HGCM82633A004352" autocomplete="off"></label>
    <div class="seg" style="margin-bottom:12px">${['plaquettes hilux 2020', 'filtre à huile', 'batterie', 'injecteur 308'].map((s) => `<button type="button" data-action="assistant-example" data-q="${esc(s)}">${esc(s)}</button>`).join('')}</div>
    <button class="btn primary full" type="submit">${icon('spark')} Analyser ma demande</button></form>
    <div id="assistantOut" style="margin-top:14px"></div>
    <p style="font-size:10px;color:var(--muted);margin-top:12px">L’assistant lit le texte et le VIN saisi localement, puis propose les pièces compatibles avec le profil actif. C’est une démonstration, pas un diagnostic mécanique.</p>`);
}
function runAssistant(query) {
  const out = $('#assistantOut');
  if (!out) return;
  if (!query.trim()) { out.innerHTML = '<div class="empty">Saisissez une demande ou touchez un exemple.</div>'; return; }
  const result = assistantRecommend(query, state.vehicleId);
  out.innerHTML = `<div class="assistant-result">
    <p>${icon('spark')} ${esc(result.explanation)}</p>
    ${result.items.map(({ part }) => `<div class="part-mini"><img class="mini-thumb" src="${esc(part.photo)}" alt="" loading="lazy"><span>${esc(part.name)}<br><small style="color:var(--muted)">${esc(part.oem)}</small></span>
      <button class="btn sm primary" type="button" data-action="add" data-id="${part.id}">${price(part.price)} · +</button></div>`).join('')}
    ${result.items.length ? '' : '<div class="empty">Aucun résultat.</div>'}
  </div>`;
}
function sheetCart() {
  const totals = cartTotals(state.cart, state.city, state.express);
  const lines = state.cart.length ? cartLines(state.cart).map(({ part, qty }) => `<div class="cart-line">
    <img class="thumb" src="${esc(part.photo)}" alt="" loading="lazy">
    <div><div style="font-size:12px;font-weight:700">${esc(part.name)}</div><div style="font-size:10px;color:var(--muted)">${price(part.price)}</div>
      <div class="qty"><button type="button" data-action="dec" data-id="${part.id}" aria-label="Retirer une unité">−</button><span>${qty}</span><button type="button" data-action="inc" data-id="${part.id}" aria-label="Ajouter une unité">+</button></div></div>
    <div style="text-align:right"><strong style="font-size:12px">${price(part.price * qty)}</strong><br><button class="link-btn" type="button" data-action="remove-line" data-id="${part.id}">${esc(t('close'))}</button></div>
  </div>`).join('') : `<div class="empty">${icon('cart')}<p>${esc(t('emptyCart'))}</p></div>`;
  openSheet(`${sheetHead(t('cart'), `${cartCount(state.cart)} article(s)`)}
    ${lines}
    <div class="kv" style="margin-top:12px"><span>${esc(t('subtotal'))}</span><strong>${price(totals.subtotal)}</strong></div>
    ${totals.savings ? `<div class="kv"><span>Économies</span><strong style="color:var(--green)">− ${price(totals.savings)}</strong></div>` : ''}
    <div class="kv"><span>${esc(t('delivery'))} · ${esc(CITIES.find((c) => c.id === state.city)?.name ?? '')}</span><strong>${price(totals.delivery)}</strong></div>
    <div class="row" style="margin:8px 0"><span style="font-size:11px;color:var(--muted)">Livraison express 2 h (+ 7 500 F)</span><button class="btn sm ${state.express ? 'primary' : ''}" type="button" data-action="toggle-express">${state.express ? 'Activée' : 'Activer'}</button></div>
    <div class="total-box"><small>Total à payer · arrivée estimée ${esc(totals.eta)}</small><div class="big">${price(totals.total)}</div></div>
    <span style="font-size:11px;color:var(--muted);font-weight:700">Mode de paiement (simulation)</span>
    <div style="margin-top:7px">${PAYMENTS.map((p) => `<button class="pay-option ${state.payment === p.id ? 'active' : ''}" type="button" data-action="select-payment" data-id="${p.id}"><span class="pay-logo" style="background:${p.color}">${esc(p.short)}</span>${esc(p.name)}</button>`).join('')}</div>
    <button class="btn primary full" style="margin-top:12px" type="button" data-action="pay" ${state.cart.length ? '' : 'disabled'}>${icon('shield')} Payer ${price(totals.total)} · démo</button>`);
}
function sheetSos() {
  openSheet(`${sheetHead('SOS 24/7', 'Dépannage et garages à proximité · simulation')}
    <div class="list-card" style="border-color:rgba(255,107,107,.45);background:rgba(255,107,107,.09)">
      <div class="row"><div><h3>Votre véhicule est immobilisé ?</h3><p>Position partagée : ${esc(CITIES.find((c) => c.id === state.city)?.name ?? '')} · ${esc(activeVehicle().plate)}</p></div><span class="pulse-dot"></span></div>
      <button class="btn danger full" style="margin-top:11px" type="button" data-action="sos-dispatch">${sosActive ? 'Demande envoyée · suivi en cours' : 'Envoyer une demande de dépannage'}</button>
      ${sosActive ? '<p style="margin:9px 0 0;color:var(--green);font-size:11px">✓ Un dépanneur est « en route » (simulation, ETA 18 min).</p>' : ''}
    </div>
    <div class="section-head" style="margin-top:16px"><h2>Garages à proximité</h2><p>démo</p></div>
    ${GARAGES.map((g) => `<div class="garage-card"><span class="garage-avatar">${icon('wrench')}</span>
      <div><h3 style="margin:0;font-size:12.5px">${esc(g.name)}</h3><p style="margin:0;color:var(--muted);font-size:10px">${esc(g.area)} · ${g.distance} km · ★ ${g.rating} · ${esc(g.services)}</p></div>
      <button class="btn sm" type="button" data-action="call-garage" data-tel="${esc(g.phone)}">${icon('phone')}</button></div>`).join('')}
    <p style="font-size:10px;color:var(--muted)">Aucun appel réel n’est passé ; les numéros sont fictifs.</p>`);
}
function sheetSuccess(order) {
  openSheet(`${sheetHead('Commande confirmée', 'Paiement simulé — aucune transaction réelle')}
    <div style="text-align:center;padding:8px 0 16px"><div style="width:64px;height:64px;margin:0 auto;border-radius:50%;display:grid;place-items:center;background:var(--green-soft);color:var(--green)">${icon('check')}</div>
      <h2 style="margin:12px 0 4px">${esc(order.ref)}</h2><p style="color:var(--muted);font-size:12px">${price(order.total)} · ${esc(order.paid)} · ${esc(CITIES.find((c) => c.id === order.city)?.name ?? '')}</p></div>
    <div class="total-box"><small>Livraison estimée</small><div class="big">${esc(order.eta)}</div></div>
    <button class="btn primary full" type="button" data-action="go" data-view="orders">Suivre ma commande</button>`);
  confetti();
}

/* ---------------- actions ---------------- */
function addToCart(id) {
  const p = findPart(id);
  if (!p) return;
  const line = state.cart.find((l) => l.id === id);
  if (line) line.qty += 1; else state.cart.push({ id, qty: 1 });
  save(); render();
  toast(`${p.name} · ${t('added')}`);
  if (!$('#sheetRoot').hidden && $('#sheetRoot').innerHTML.includes('Mode de paiement')) sheetCart();
}
function toggleFav(id) {
  const i = state.favorites.indexOf(id);
  if (i >= 0) state.favorites.splice(i, 1); else state.favorites.push(id);
  save(); render();
  if (!$('#sheetRoot').hidden) {
    if ($('#sheetRoot').innerHTML.includes('pièce(s)')) sheetFavorites();
    else $$('.fav-toggle', $('#sheetRoot')).forEach((btn) => btn.classList.toggle('on', btn.dataset.id === id));
  }
  toast(i >= 0 ? 'Retiré des favoris' : 'Ajouté aux favoris');
}
function changeQty(id, delta) {
  const line = state.cart.find((l) => l.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) state.cart = state.cart.filter((l) => l.id !== id);
  save(); render(); sheetCart();
}
function pay() {
  if (!state.cart.length) return;
  const totals = cartTotals(state.cart, state.city, state.express);
  const order = {
    ref: orderReference(Date.now() + state.orders.length),
    date: new Date().toLocaleDateString(state.lang === 'fr' ? 'fr-FR' : 'en-GB'),
    items: [...state.cart], total: totals.total, city: state.city,
    status: 'En préparation', paid: PAYMENTS.find((p) => p.id === state.payment)?.name ?? '', eta: totals.eta,
  };
  state.orders.push(order);
  state.cart = [];
  save(); render();
  sheetSuccess(order);
  toast(`Commande ${order.ref} confirmée`);
}

document.addEventListener('click', (event) => {
  const nav = event.target.closest('#bottomNav button[data-view]');
  if (nav) { state.view = nav.dataset.view; state.query = ''; render(); $('#view').scrollIntoView({ block: 'start' }); return; }
  const actionEl = event.target.closest('[data-action]');
  if (!actionEl) {
    if (event.target.id === 'sheetRoot') closeSheet();
    return;
  }
  const { action, id, view } = actionEl.dataset;
  switch (action) {
    case 'close-sheet': closeSheet(); break;
    case 'go': state.view = view; closeSheet(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); break;
    case 'add': addToCart(id); break;
    case 'fav': toggleFav(id); break;
    case 'inc': changeQty(id, 1); break;
    case 'dec': changeQty(id, -1); break;
    case 'remove-line': state.cart = state.cart.filter((l) => l.id !== id); save(); render(); sheetCart(); break;
    case 'open-cart': sheetCart(); break;
    case 'open-assistant': sheetAssistant(); break;
    case 'open-sos': sheetSos(); break;
    case 'open-vehicles': sheetVehicles(); break;
    case 'open-city': sheetCities(); break;
    case 'open-favorites': sheetFavorites(); break;
    case 'open-brands': openSheet(brandsSheetHtml()); break;
    case 'select-brand': state.brand = id; state.view = 'catalog'; save(); closeSheet(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); break;
    case 'clear-brand': state.brand = null; render(); break;
    case 'toggle-all': state.allVehicles = !state.allVehicles; render(); break;
    case 'accent': state.accent = state.accent === 'lime' ? 'orange' : 'lime'; document.documentElement.dataset.accent = state.accent; save(); render(); break;
    case 'seller-region': state.sellerRegion = id || ''; render(); break;
    case 'open-part': sheetPart(id); break;
    case 'select-vehicle': state.vehicleId = id; save(); closeSheet(); render(); toast('Véhicule mis à jour'); break;
    case 'select-city': state.city = id; save(); closeSheet(); render(); toast(`Livraison : ${CITIES.find((c) => c.id === id)?.name}`); break;
    case 'select-payment': state.payment = id; save(); sheetCart(); break;
    case 'toggle-express': state.express = !state.express; save(); sheetCart(); break;
    case 'category': state.category = id || null; state.view = 'catalog'; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); break;
    case 'sort': state.sort = id; render(); break;
    case 'clear-query': state.query = ''; $('#searchInput').value = ''; render(); break;
    case 'lang': state.lang = state.lang === 'fr' ? 'en' : 'fr'; save(); render(); break;
    case 'pay': pay(); break;
    case 'sos-dispatch': sosActive = true; sheetSos(); toast('Demande de dépannage envoyée (démo)'); break;
    case 'call-garage': toast(`Appel simulé vers ${actionEl.dataset.tel}`); break;
    case 'assistant-example': { const input = $('#assistantForm [name=q]'); if (input) { input.value = actionEl.dataset.q; runAssistant(input.value); } break; }
    case 'reorder': {
      const order = [...state.orders].reverse().find((o) => o.ref === actionEl.dataset.ref);
      if (order) { state.cart = order.items.map((i) => ({ ...i })); save(); render(); toast('Articles ajoutés au panier'); sheetCart(); }
      break;
    }
    case 'reset': {
      state = { ...defaults, cart: [], favorites: [], orders: [] };
      save(); closeSheet(); render(); toast('Données de démo réinitialisées');
      break;
    }
    case 'install': if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt = null; $('#installBanner').hidden = true; } break;
    case 'install-dismiss': state.installDismissed = true; save(); $('#installBanner').hidden = true; break;
    default: break;
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id !== 'assistantForm') return;
  event.preventDefault();
  runAssistant(new FormData(event.target).get('q') ?? '');
});
document.addEventListener('input', (event) => {
  if (event.target.id === 'sellerSearch') {
    state.sellerQuery = event.target.value;
    $('#view').innerHTML = sellersView(state.sellerQuery, state.sellerRegion);
    const next = $('#sellerSearch'); if (next) { next.focus(); next.setSelectionRange(next.value.length, next.value.length); }
    return;
  }
  if (event.target.id !== 'searchInput') return;
  state.query = event.target.value;
  if (state.view !== 'catalog') { state.view = 'catalog'; render(); $('#searchInput').value = state.query; $('#searchInput').focus(); }
  else {
    const head = $('#view .section-head p');
    if (head) head.textContent = `${filteredParts().length} ${t('results')} · ${activeVehicle().brand} ${activeVehicle().model}`;
    const grid = $('#view .grid');
    if (grid) grid.outerHTML = partGrid(filteredParts());
  }
});
document.addEventListener('change', (event) => {
  const input = event.target.closest('[data-km]');
  if (!input) return;
  const vehicle = findVehicle(input.dataset.km);
  if (!vehicle) return;
  vehicle.km = Math.max(0, Number(input.value) || 0);
  save(); render(); toast('Kilométrage enregistré');
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !$('#sheetRoot').hidden) closeSheet(); });

/* ---------------- PWA ---------------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  if (!state.installDismissed) $('#installBanner').hidden = false;
});

render();
