document.addEventListener('DOMContentLoaded', function () {
  var body = document.body, menu = document.querySelector('.main-nav');
  var openBtn = document.querySelector('.nav__icon-menu'), closeBtn = document.querySelector('.nav__icon-close');
  if (openBtn) openBtn.addEventListener('click', function () { menu.classList.add('is-open'); });
  if (closeBtn) closeBtn.addEventListener('click', function () { menu.classList.remove('is-open'); });
  document.querySelectorAll('.main-nav a').forEach(function (a) { a.addEventListener('click', function () { menu.classList.remove('is-open'); }); });
  setTimeout(function () { body.classList.add('is-in'); }, 150);
  setTimeout(function () { body.classList.add('stop-animations'); }, 1500);
  var top = document.querySelector('.top');
  if (top) {
    window.addEventListener('scroll', function () { window.scrollY > window.innerHeight ? top.classList.add('is-active') : top.classList.remove('is-active'); });
    top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }
});
