/** Extra UI blocks: all brands + region-specific advice for Senegal / West Africa. */
import { BRANDS, REGION_TIPS, SELLERS, SELLER_REGIONS } from './core.js';

const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function extraHome() {
  const popular = BRANDS.slice(0, 14);
  return `
    <section class="section">
      <div class="section-head"><h2>Marques couvertes</h2><p>${BRANDS.length} marques</p></div>
      <div class="chips">${popular.map((b) => `<button class="chip" type="button" data-action="select-brand" data-id="${esc(b.name)}">${esc(b.name)}</button>`).join('')}</div>
      <button class="btn ghost full" style="margin-top:10px" type="button" data-action="open-brands">Voir toutes les marques (${BRANDS.length})</button>
    </section>
    <section class="section">
      <div class="section-head"><h2>Conseils terrain</h2><p>Sénégal & Afrique de l’Ouest</p></div>
      ${REGION_TIPS.map((tip) => `<button class="list-card" style="width:100%;text-align:left" type="button" data-action="open-part" data-id="${tip.partIds[0]}"><div class="row"><span class="vehicle-avatar">🔧</span><div style="flex:1"><h3>${esc(tip.title)}</h3><p>${esc(tip.text)}</p></div></div></button>`).join('')}
    </section>`;
}

export function brandsSheetHtml() {
  const groups = [...new Set(BRANDS.map((b) => b.segment))];
  return `<div class="sheet-head"><div><h2>Toutes les marques</h2><p>${BRANDS.length} marques référencées</p></div><button class="sheet-close" type="button" data-action="close-sheet" aria-label="Fermer">×</button></div>
    ${groups.map((g) => {
      const list = BRANDS.filter((b) => b.segment === g);
      return `<div class="section-head" style="margin-top:14px"><h2>${esc(g)}</h2><p>${list.length}</p></div>
      <div class="sort-row">${list.map((b) => `<button class="sort-btn" type="button" data-action="select-brand" data-id="${esc(b.name)}">${esc(b.name)}</button>`).join('')}</div>`;
    }).join('')}
    <p style="font-size:10px;color:var(--muted);margin-top:16px">Touchez une marque pour filtrer le catalogue. Catalogue de démonstration : disponibilités et prix sont fictifs.</p>`;
}

export function sellersView(query = '', region = '') {
  const q = String(query || '').toLowerCase();
  const list = SELLERS.filter((s) => {
    const inRegion = !region || s.region === region;
    const hay = `${s.name} ${s.city} ${s.region} ${s.address} ${s.specialty}`.toLowerCase();
    return inRegion && (!q || hay.includes(q));
  });
  const covered = new Set(SELLERS.map((s) => s.region));
  const missing = SELLER_REGIONS.filter((r) => !covered.has(r));
  const telHref = (phone) => 'tel:' + phone.replace(/[^+\d]/g, '');

  return `<section class="section" style="margin-top:14px">
    <div class="section-head"><h2>Annuaire des vendeurs</h2><p>${SELLERS.length} fiches · ${covered.size}/14 régions</p></div>
    <label class="search-box" style="margin-bottom:10px">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      <input id="sellerSearch" type="search" value="${esc(query)}" placeholder="Ville, enseigne, spécialité…" aria-label="Rechercher un vendeur">
    </label>
    <div class="chips" style="margin-inline:0;padding-inline:0">
      <button class="chip ${!region ? 'active' : ''}" type="button" data-action="seller-region" data-id="">Toutes (${SELLERS.length})</button>
      ${SELLER_REGIONS.map((r) => `<button class="chip ${region === r ? 'active' : ''}" type="button" data-action="seller-region" data-id="${esc(r)}">${esc(r)} (${SELLERS.filter((s) => s.region === r).length})</button>`).join('')}
    </div>
    <p style="font-size:10px;color:var(--muted);margin:12px 0 4px">${list.length} résultat${list.length > 1 ? 's' : ''} affiché${list.length > 1 ? 's' : ''}. Coordonnées publiques indicatives : appelez avant de vous déplacer.</p>
    ${list.length ? list.map((s) => `<article class="list-card">
      <div class="row"><div><h3>${esc(s.name)}</h3><p>${esc(s.region)} · ${esc(s.city)}</p></div><span class="status ok">${esc(s.region)}</span></div>
      <p style="margin-top:8px;font-size:11px">${esc(s.address)}</p>
      <p style="margin-top:4px;font-size:11px;color:var(--accent-2)">${esc(s.specialty)}</p>
      <div class="divider"></div>
      <div class="row" style="gap:6px">
        ${s.phone ? `<a class="btn sm primary" href="${telHref(s.phone)}">Appeler</a>` : '<span style="font-size:10px;color:var(--muted)">Téléphone non public</span>'}
        <a class="btn sm" href="${esc(s.source)}" target="_blank" rel="noopener">Source</a>
      </div>
    </article>`).join('') : `<div class="empty">Aucun vendeur trouvé pour ce filtre.</div>`}
    <div class="list-card" style="margin-top:14px"><h3>Régions sans fiche vérifiée</h3>
      <p>${missing.length ? missing.map(esc).join(' · ') : 'Aucune'} — aucun vendeur fiable trouvé dans les sources consultées. L’annuaire n’est donc pas exhaustif : les petits commerces de quartier et les vendeurs sur réseaux sociaux n’y figurent pas.</p>
    </div>
    <p style="font-size:10px;color:var(--muted);margin-top:12px">Sources : annuaires Go Africa Online, Showroom Africa, Expat.com, sites officiels (LASA, DPA, AutoLink, Sogafric) et pages Facebook publiques. Aucune coordonnée n’a été inventée.</p>
  </section>`;
}
