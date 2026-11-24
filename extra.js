/** Extra UI blocks: all brands + region-specific advice for Senegal / West Africa. */
import { BRANDS, REGION_TIPS } from './core.js';

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
