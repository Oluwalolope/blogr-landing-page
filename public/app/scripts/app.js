"use strict";
const menuBtn = document.querySelector('.topnav--toggle');
const navMenu = document.querySelector('.nav--items');
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
});
