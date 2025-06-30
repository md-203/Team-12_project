document.addEventListener('DOMContentLoaded', function () {
const button = document.getElementById('toggleMenu');
const menu = document.querySelector('.index');
const content = document.querySelector('.content');
button.addEventListener('click', function () {
menu.classList.toggle('hidden');
content.classList.toggle('expanded');});});