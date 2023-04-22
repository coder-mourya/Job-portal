const burger = document.querySelector('.burger');
const nav = document.querySelector('#topnavbar ul');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('active');
  if (nav.classList.contains('nav-active')) {
    nav.style.height = 'auto';
  } else {
    nav.style.height = '70px';
  }
});


