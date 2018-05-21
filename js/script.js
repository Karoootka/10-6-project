document.addEventListener('DOMContentLoaded', function() {

  var hamburgerMenu = document.querySelector('#hamburger-menu');
  hamburgerMenu.addEventListener('click', function() {
    document.querySelector('header nav').classList.toggle('expanded');
    document.querySelector('header .main-nav').classList.toggle('wide');
  });
});
