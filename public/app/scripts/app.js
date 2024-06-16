"use strict";
const menuBtn = document.querySelector('.topnav--toggle');
const navMenu = document.querySelector('.nav--items');
const dropDowns = document.querySelectorAll('.dropdown');
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    let btnIcon = menuBtn.querySelector('img');
    if (navMenu.classList.contains('active')) {
        btnIcon.setAttribute('src', './assets/images/icon-close.svg');
    }
    else {
        btnIcon.setAttribute('src', './assets/images/icon-hamburger.svg');
    }
});
dropDowns.forEach(dropDown => {
    dropDown.addEventListener('click', (e) => {
        e.stopPropagation();
        dropDown.classList.toggle('open');
    });
});
