const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const form = document.querySelector('.popup');
const main = document.querySelector('main');
const formSelect = document.getElementById('select');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  body.classList.add('mobile');
}

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open-menu');
  hamburger.classList.toggle('active');
  if (menu.classList.contains('open-menu')) {
    body.classList.add('scroll-lock');
  } else {
    body.classList.remove('scroll-lock');
  }

  main.classList.toggle('margin');
});

menuItems.forEach(item => item.addEventListener('click', () => {
  menu.classList.remove('open-menu');
  hamburger.classList.remove('active');
  if (!form.classList.contains('visible')) {
    body.classList.remove('scroll-lock');
  }
  main.classList.remove('margin');
}));


function toggleForm() {
  form.classList.toggle('visible');
  if (form.classList.contains('visible')) {
    body.classList.add('scroll-lock');
  } else {
    body.classList.remove('scroll-lock');
  }
}

formSelect.addEventListener('change', () => {
  if (select.value === 'write') {
    document.getElementById('placeholder').placeholder = 'email goes here';
    document.getElementById('placeholder').type = 'email';

  } else if (select.value === 'call') {
    document.getElementById('placeholder').placeholder = 'phone number goes here';
    document.getElementById('placeholder').type = 'number';
  }
});
