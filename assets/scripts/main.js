let ham_menu = document.querySelector('#hamburger-menu');
let menu_list = document.querySelector('#menu-list');
let body = document.querySelector('body');
let dark_mode = document.querySelector('#dark-mode');
let dark_mode_icon = document.querySelector('#dark-mode-icon');

ham_menu.addEventListener('click', function() {
  menu_list.classList.toggle('hidden');
});

dark_mode.addEventListener('click', function() {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    dark_mode_icon.classList.remove('fa-moon');
    dark_mode_icon.classList.add('fa-sun');
  } else {
    dark_mode_icon.classList.remove('fa-sun');
    dark_mode_icon.classList.add('fa-moon');
  }
});

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-transparent');
  } else {
    navbar.classList.remove('navbar-transparent');
  }
});
