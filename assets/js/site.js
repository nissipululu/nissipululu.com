// Reveals tiles and photos as they scroll into view. No tracking, no libraries.
(function () {
  var els = [].slice.call(document.querySelectorAll('.cell, .reveal'));
  if (!els.length) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (x) {
      if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });
  els.forEach(function (el) { io.observe(el); });
})();
