const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");
// let count = 0;
iconMenu.addEventListener('click', function(){
  menu.classList.toggle("menu-show");
})