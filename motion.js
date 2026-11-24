/**
 * MecanoLink motion controller.
 * Adds staggered entrances, count-up stats and press ripples without touching app logic.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SELECTOR = '.hero, .stat, .radar, .radar-item, .section-head, .part-card, .list-card, .vehicle-card, .garage-card, .assistant-result, .pay-option, .mini-badge, .cart-line, .sheet-head, .field, .seg, .total-box, .garage-card';

if (!reduce && 'IntersectionObserver' in window && 'MutationObserver' in window) {
  document.documentElement.classList.add('motion-ready');

  const seen = new WeakSet();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target;
      el.classList.add('m-in');
      observer.unobserve(el);
      if (el.dataset.count !== undefined && !el.dataset.counted) {
        el.dataset.counted = '1';
        countUp(el, Number(el.dataset.count));
      }
      if (el.classList.contains('stat')) {
        const strong = el.querySelector('strong[data-count]');
        if (strong && !strong.dataset.counted) { strong.dataset.counted = '1'; countUp(strong, Number(strong.dataset.count)); }
      }
    }
  }, { threshold: 0, rootMargin: '0px 0px 80px 0px' });

  function countUp(el, target) {
    const start = performance.now();
    const duration = 750;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('fr-FR');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function register(root = document) {
    const groups = new Map();
    for (const el of root.querySelectorAll(SELECTOR)) {
      if (seen.has(el) || el.classList.contains('m-in')) continue;
      seen.add(el);
      el.classList.add('m-anim');
      const parent = el.parentElement;
      const index = groups.get(parent) ?? 0;
      groups.set(parent, index + 1);
      el.style.setProperty('--m-i', String(Math.min(index, 6)));
      observer.observe(el);
    }
  }

  // Count-up targets are the three stat numbers.
  function registerCounters() {
    document.querySelectorAll('.stat strong').forEach((el) => {
      if (el.dataset.count !== undefined) return;
      const value = Number(el.textContent.replace(/\D/g, ''));
      if (!Number.isFinite(value)) return;
      el.dataset.count = String(value);
      observer.observe(el);
    });
  }

  let queued = false;
  const repaint = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; register(); registerCounters(); });
  };

  repaint();
  // Fallback for engines that throttle IntersectionObserver in headless/offscreen contexts.
  setTimeout(() => {
    document.querySelectorAll('.m-anim:not(.m-in)').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight + 80 && r.bottom > 0) el.classList.add('m-in');
    });
  }, 420);
  new MutationObserver(repaint).observe(document.body, { childList: true, subtree: true });

  document.addEventListener('pointerdown', (event) => {
    const btn = event.target.closest('.btn, .chip, .add-btn, .pay-option, .seg button, .bottom-nav button');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ml-ripple';
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    btn.append(ripple);
    setTimeout(() => ripple.remove(), 520);
  });

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.add-btn');
    if (!btn) return;
    btn.classList.remove('bump');
    void btn.offsetWidth;
    btn.classList.add('bump');
    setTimeout(() => btn.classList.remove('bump'), 460);
  });
}
