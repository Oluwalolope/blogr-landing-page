const menuBtn = document.querySelector('.topnav--toggle') as HTMLButtonElement;
const navMenu = document.querySelector('.nav--items') as HTMLDivElement;

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  navMenu.classList.toggle('active');
});
