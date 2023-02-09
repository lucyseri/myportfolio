'use strict';
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const sec1 = sections[0];
const sec2 = sections[1];
const sec2Title = sec2.querySelector('.title>.left>h2');
const sec2Preview = sec2.querySelector('.preview-con');
const sec3 = sections[2];
const sec3Title = sec3.querySelector('.title>.left>h2');
window.addEventListener("scroll", ()=>{
  let value = window.scrollY;
  if(value >= 100){
    sec2Title.classList.add('titleIn');
  }else{
    sec2Title.classList.remove('titleIn');
  }
  if(value >= sec2.offsetTop){
    header.classList.remove('headerOn');
  }else{
    header.classList.add('headerOn');
  }
  if(value >= sec2Preview.offsetTop + 150){
    sec3Title.classList.add('titleIn');
  }else{
    sec3Title.classList.remove('titleIn');
  }
});

const popup = document.querySelector('.popup-con');
const popupOut = popup.querySelector('span');
const popupIframe = popup.querySelector('iframe');
const sec2buttons = sec2.querySelector('.buttons');
const sec2buttonsBtn = sec2buttons.querySelector('p');
sec2buttonsBtn.addEventListener('click', ()=>{
  popupIframe.setAttribute('src', 'https://lucyseri.github.io/vixtorm/');
  popup.classList.add('popupOn');
  popupIframe.setAttribute('width', '1920px');
  popupIframe.setAttribute('height', '860px');
  popupIframe.style.borderRadius = "0";
})
const sec3buttons = sec3.querySelector('.buttons');
const sec3buttonsBtn = sec3buttons.querySelectorAll('p');
sec3buttons.addEventListener('click', (e)=>{
  sec3buttonsBtn.forEach((el, idx)=>{
    if(e.target == el){
      popupIframe.setAttribute('src', 'https://lucyseri.github.io/jellycat_project/');
      popup.classList.add('popupOn');
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