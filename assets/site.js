// The language switcher: remember the choice for the root page, and keep the section the
// reader is on (both languages use the same ids).
document.addEventListener('click', function (event) {
  var link = event.target.closest && event.target.closest('a[data-lang]');
  if (!link) return;
  try { localStorage.setItem('finsight-lang', link.dataset.lang); } catch (e) {}
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (location.hash && link.getAttribute('href').indexOf('#') < 0) {
    event.preventDefault();
    location.href = link.href + location.hash;
  }
});

// The home page's hero: a carousel of three slides. Without JavaScript the first slide shows
// and the controls stay hidden. No autoplay: the reader moves it.
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;
  var slides = hero.querySelectorAll('.slide');
  var dots = hero.querySelectorAll('.dots button');
  var controls = hero.querySelector('.controls');
  if (slides.length < 2 || !controls) return;
  var current = 0;
  function show(n) {
    current = (n + slides.length) % slides.length;
    for (var i = 0; i < slides.length; i++) {
      var on = i === current;
      slides[i].classList.toggle('is-on', on);
      if (on) slides[i].removeAttribute('aria-hidden'); else slides[i].setAttribute('aria-hidden', 'true');
      if ('inert' in slides[i]) slides[i].inert = !on;
      if (dots[i]) dots[i].setAttribute('aria-current', on ? 'true' : 'false');
    }
  }
  for (var i = 0; i < dots.length; i++) {
    (function (k) { dots[k].addEventListener('click', function () { show(k); }); })(i);
  }
  hero.querySelectorAll('[data-step]').forEach(function (button) {
    button.addEventListener('click', function () { show(current + Number(button.dataset.step)); });
  });
  hero.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
  controls.hidden = false;
  show(0);
})();
