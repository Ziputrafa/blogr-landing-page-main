const navbarBtn = document.querySelectorAll('ul#navbar li');
const lightIcnArrow = document.querySelectorAll('ul#navbar li img');
const navMenu = document.querySelectorAll('nav div ul');

navbarBtn[0].addEventListener('click', function () {
  lightIcnArrow[0].classList.toggle('rotate');

  navMenu[0].classList.toggle('scale');
  navMenu[1].classList.remove('scale');
  navMenu[2].classList.remove('scale');
});
navbarBtn[1].addEventListener('click', function () {
  lightIcnArrow[1].classList.toggle('rotate');
  navMenu[1].classList.toggle('scale');
  navMenu[0].classList.remove('scale');
  navMenu[2].classList.remove('scale');
});
navbarBtn[2].addEventListener('click', function () {
  lightIcnArrow[2].classList.toggle('rotate');
  navMenu[2].classList.toggle('scale');
  navMenu[1].classList.remove('scale');
  navMenu[0].classList.remove('scale');
});

const hamburgerMnu = document.querySelector('img#hamburger-menu');
const introSide = document.querySelector('#intro-side');
const navMobile = document.querySelector('#nav-mobile');

const darkIcnArrow = document.querySelectorAll('#nav-mobile img');
const mobileNavbarBtn = document.querySelectorAll('li.navbar-title');
const mobileNavMenu = document.querySelectorAll('ul.navbar-switch');

hamburgerMnu.addEventListener('click', function () {
  if (hamburgerMnu.getAttribute('src') === 'images/icon-hamburger.svg') {
    hamburgerMnu.setAttribute('src', 'images/icon-close.svg');

    navMobile.style.transform = 'translateY(0)';
    introSide.style.opacity = '0';

    darkIcnArrow[0].classList.remove('rotate');
    darkIcnArrow[1].classList.remove('rotate');
    darkIcnArrow[2].classList.remove('rotate');
    mobileNavMenu[0].classList.add('navbar-switch');
    mobileNavMenu[1].classList.add('navbar-switch');
    mobileNavMenu[2].classList.add('navbar-switch');
  } else {
    hamburgerMnu.setAttribute('src', 'images/icon-hamburger.svg');
    navMobile.style.transform = 'translateY(-1000%)';
    introSide.style.opacity = '1';
  }
});

mobileNavbarBtn[0].addEventListener('click', function () {
  darkIcnArrow[0].classList.toggle('rotate');
  mobileNavMenu[0].classList.toggle('navbar-switch');
});
mobileNavbarBtn[1].addEventListener('click', function () {
  darkIcnArrow[1].classList.toggle('rotate');
  mobileNavMenu[1].classList.toggle('navbar-switch');
});
mobileNavbarBtn[2].addEventListener('click', function () {
  darkIcnArrow[2].classList.toggle('rotate');
  mobileNavMenu[2].classList.toggle('navbar-switch');
});

body.addEventListener('scrollX', function () {
  alert('hipa');
});
