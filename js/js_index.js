'use strict';
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
window.addEventListener("scroll", ()=>{
  let value = window.scrollY;
  if(value >= sections[1].offsetTop){
    header.classList.remove('headerOn');
  }else{
    header.classList.add('headerOn');
  }
})