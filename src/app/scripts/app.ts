const menuBtn = document.querySelector('.topnav--toggle') as HTMLButtonElement;
const navMenu = document.querySelector('.nav--items') as HTMLDivElement;
const dropDowns = document.querySelectorAll('.dropdown');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  navMenu.classList.toggle('active');

  let btnIcon = menuBtn.querySelector('img') as HTMLImageElement;
  
  if (navMenu.classList.contains('active')) {
    btnIcon.setAttribute('src', './assets/images/icon-close.svg');
  } else {
    btnIcon.setAttribute('src', './assets/images/icon-hamburger.svg');
  }
});

dropDowns.forEach(dropDown => {
  dropDown.addEventListener('click', (e) => {
    e.stopPropagation();
    dropDown.classList.toggle('open');
  });
});