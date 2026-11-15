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
