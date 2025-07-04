document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('scrollBt');
  window.addEventListener("scroll", function () {
  const scrollY = window.scrollY; const maxOpacityScroll = 700;
  const opacity = Math.min(scrollY / maxOpacityScroll, .6);
  btn.style.opacity = opacity;
  btn.style.pointerEvents = opacity > 0 ? "auto" : "none";});
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });});});