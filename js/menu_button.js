document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleMenu');
    const menu = document.querySelector('.index');
    function isMobile() {return window.innerWidth <= 768;}
    function toggleMenu() {
      if (!isMobile()) return;
      menu.classList.toggle('show');
      button.textContent = menu.classList.contains('show') ?
        "× Close" : "☰ Menu";}
    button.addEventListener('click', toggleMenu);
    window.addEventListener('resize', () => {
      if (!isMobile()) {menu.classList.remove('show');
        menu.style.display = ""; button.style.display = "none";} 
        else {button.style.display = "block";}});});
