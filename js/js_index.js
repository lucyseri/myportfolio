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
});

const popup = document.querySelector('.popup-con');
const popupOut = popup.querySelector('span');
const popupIframe = popup.querySelector('iframe');
const sec2 = document.querySelector('section.sec2');
const sec2buttons = sec2.querySelector('.buttons');
const sec2buttonsBtn = sec2buttons.querySelector('p');
const sec3 = document.querySelector('section.sec3');
const sec3buttons = sec3.querySelector('.buttons');
const sec3buttonsBtn = sec3buttons.querySelectorAll('p');

sec2buttonsBtn.addEventListener('click', ()=>{
  popup.classList.add('popupOn');
  popupIframe.setAttribute('src', 'https://lucyseri.github.io/vixtorm/');
  popupIframe.setAttribute('width', '1920px');
  popupIframe.setAttribute('height', '860px');
  popupIframe.style.borderRadius = "0";
})
sec3buttons.addEventListener('click', (e)=>{
  sec3buttonsBtn.forEach((el, idx)=>{
    if(e.target == el){
      popup.classList.add('popupOn');
      popupIframe.setAttribute('src', 'https://lucyseri.github.io/jellycat_project/');
      if(idx == 0){
        popupIframe.setAttribute('width', '1920px');
        popupIframe.setAttribute('height', '860px');
        popupIframe.style.borderRadius = "0";
      }else if(idx == 1){
        popupIframe.setAttribute('width', '768px');
        popupIframe.setAttribute('height', '1024px');
        popupIframe.style.borderRadius = 25 + "px";
        
      }else if(idx == 2){
        popupIframe.setAttribute('width', '480px');
        popupIframe.setAttribute('height', '910px');
        popupIframe.style.borderRadius = 25 + "px";
      }
    }
  })
})
popupOut.addEventListener('click', ()=>{
  popup.classList.remove('popupOn');
})