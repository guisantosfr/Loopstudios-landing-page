const menu = document.querySelector('.header__hamburger');

menu.addEventListener('click', e => {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  }
  else {
    menu.classList.add('open');
  }
})