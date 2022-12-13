'use strict';
//scroll
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const h2 = document.querySelectorAll('h2.ani-h2');
const pThanks = document.querySelector('p.thanks');
const pReview = document.querySelector('p.review');
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value >= 10) {
    h2[0].classList.add('titleIn');
  } else {
    h2[0].classList.remove('titleIn');
  }
  if (value >= sections[1].offsetTop + 150) {
    h2[1].classList.add('titleIn');
  } else {
    h2[1].classList.remove('titleIn');
  }
  if (value >= sections[3].offsetTop + 10) {
    header.style.visibility = "hidden";
  } else {
    header.style.visibility = "visible";
  }
  if (value >= sections[3].offsetTop + (sections[3].offsetHeight / 2)) {
    pThanks.classList.add('thanksAni');
    pReview.classList.add('reviewAni');
  } else {
    pThanks.classList.remove('thanksAni');
    pReview.classList.remove('reviewAni');
  }
})

//sec1
const sec1ConGallery = sections[0].querySelector('.gallery');
const sec1ConGalleryUl = sec1ConGallery.querySelector('ul');
const sec1ConGalleryUlLi = sec1ConGalleryUl.querySelectorAll('li');
const sec1LeftArrow = sections[0].querySelector('span.arrow.left-arrow')
const sec1RightArrow = sections[0].querySelector('span.arrow.right-arrow')
const sec1ConBtnItems = sections[0].querySelector('.items');
const sec1ConBtnItemsUl = sec1ConBtnItems.querySelector('ul');
const sec1ConBtnItemsUlLi = sec1ConBtnItemsUl.querySelectorAll('li');
const arrBgSec1=[];
for (let a = 0; a < sec1ConGalleryUlLi.length; a++) {
  arrBgSec1.push(`url(img/sec1_${a}.png) no-repeat 50%/cover`);
  sec1ConGalleryUlLi[a].style.background = arrBgSec1[a];
}

let i = 0;
function autoGo1(num){
  const gap = sec1ConGalleryUlLi[1].offsetLeft - sec1ConGalleryUlLi[0].offsetLeft;
  const goto = (-num * gap) + 'px';
  sec1ConGallery.style.left = goto;
  sec1ConGallery.style.transition = 300 + "ms";
}
function autoAdd1(num){
  sec1ConBtnItemsUlLi.forEach((el, idx)=>{
    let startNum = num - 1;
    if(startNum>=sec1ConGalleryUlLi.length-2){
      startNum=0;
    }else if(startNum<0){
      startNum=sec1ConGalleryUlLi.length-3;
    }
    if(idx==startNum){
      el.classList.add('btnOn');
    }else{
      el.classList.remove('btnOn');
    }
  })
}
function autoGallery1() {
  i++;
  const gap = sec1ConGalleryUlLi[1].offsetLeft - sec1ConGalleryUlLi[0].offsetLeft;
  const goto = (-i * gap) + 'px';
  if (i > sec1ConGalleryUlLi.length - 1) {
    sec1ConGallery.style.left = "-" + sec1ConGalleryUlLi[1].offsetLeft + "px";
    sec1ConGallery.style.transition = 0 + "ms";
    i = 1;
    setTimeout(autoGallery1, 0);
  } else {
    sec1ConGallery.style.left = goto;
    sec1ConGallery.style.transition = 300 + "ms";
  }
  autoAdd1(i);
  // console.log(i);
}
let setIn1 = setInterval(autoGallery1, 3000);
(() => {autoGallery1()})();

function arrowFn1(e) {
  if (e.type == "mouseover") {
    clearInterval(setIn1);
  } else if (e.type == "mouseout") {
    setIn1 = setInterval(autoGallery1, 3000);
  } else if (e.type == "click") {
    if(e.target == sec1LeftArrow){
      if (i >= sec1ConGalleryUlLi.length - 1) {
        sec1ConGallery.style.left = "-" + sec1ConGalleryUlLi[1].offsetLeft + "px";
        sec1ConGallery.style.transition = 0 + "ms";
        i=1;
      }
      i++;
      autoGo1(i);
      autoAdd1(i);
    }else if(e.target==sec1RightArrow){
      if (i <= 0) {
        sec1ConGallery.style.left = "-" + sec1ConGalleryUlLi[3].offsetLeft + "px";
        sec1ConGallery.style.transition = 0 + "ms";
        i = sec1ConGalleryUlLi.length-2;
      }
      i--;
      autoGo1(i);
      autoAdd1(i);
    }
    //console.log(e.type + "/" + i);
  }
}
sec1LeftArrow.addEventListener('mouseover', arrowFn1);
sec1LeftArrow.addEventListener('mouseout', arrowFn1);
sec1LeftArrow.addEventListener('click', arrowFn1);
sec1RightArrow.addEventListener('mouseover', arrowFn1);
sec1RightArrow.addEventListener('mouseout', arrowFn1);
sec1RightArrow.addEventListener('click', arrowFn1);

function bottomBtnFn1(e){
  if(e.type == 'mouseover'){
    sec1ConBtnItemsUlLi.forEach((el, idx)=>{
      if(e.target==el){
        clearInterval(setIn1);
      }
    })
  }else if(e.type == 'mouseout'){
    sec1ConBtnItemsUlLi.forEach((el, idx)=>{
      if (e.target == el) {
        setIn1 = setInterval(autoGallery1, 3000);
      }
    })
  }else if(e.type == 'click'){
    sec1ConBtnItemsUlLi.forEach((el, idx)=>{
      if (e.target == el) {
        el.classList.add('btnOn');
        let startNum = idx + 1;
        autoGo1(startNum);
        i = startNum;
      }else{
        el.classList.remove('btnOn');
      }
    })
    //console.log(e.type + "/" + i);
  }
}
sec1ConBtnItemsUl.addEventListener('mouseover', bottomBtnFn1);
sec1ConBtnItemsUl.addEventListener('mouseout', bottomBtnFn1);
sec1ConBtnItemsUl.addEventListener('click', bottomBtnFn1);

//sec2
const vixtormVisiteButton = document.querySelector('span.vixtorm.visite-button');
const popup = document.querySelector('.popup');
const popupIframe = popup.querySelectorAll('iframe');
vixtormVisiteButton.addEventListener('click', () => {
  popup.classList.add('popupOn');
  popupIframe[0].classList.add('iframeOn');
})

const sec2Gallery = sections[1].querySelector('.fade-gallery');
const sec2GalleryUl = sec2Gallery.querySelector('ul');
const sec2GalleryUlLi = sec2GalleryUl.querySelectorAll('li');
const sec2Btn = sections[1].querySelector('.items');
const sec2BtnUl = sec2Btn.querySelector('ul');
const sec2BtnUlLi = sec2BtnUl.querySelectorAll('li');
const arrBgSec2 = [];
for(let b = 0; b < sec2GalleryUlLi.length; b++){
  arrBgSec2.push(`url(img/v${b}.jpg) no-repeat 50%/cover`);
  sec2GalleryUlLi[b].style.background = arrBgSec2[b];
}
function sec2autoFadeFn(num){
  sec2GalleryUlLi.forEach((el, idx)=>{
    if(idx==num){
      el.classList.add('fadeLi');
    }else{
      el.classList.remove('fadeLi');
    }
  })
}
let j = -1;
function sec2FadeGallry(){
  if(j>=sec2GalleryUlLi.length - 1) j = -1;
  j++;
  sec2autoFadeFn(j);
  sec2BtnUlLi.forEach((el2, idx2)=>{
    if(idx2==j){
      el2.classList.add('btnOn');
    }else{
      el2.classList.remove('btnOn');
    }
  })
  if(j>=sec2GalleryUlLi.length - 1) j = -1;
}
let setIn2 = setInterval(sec2FadeGallry, 3000);
(()=>{sec2FadeGallry()})();

function sec2BtnFn(e){
  if(e.type=='mouseover'){
    sec2BtnUlLi.forEach((el, idx)=>{
      if(e.target==el){
        clearInterval(setIn2);
      }
    })
  }else if(e.type=='mouseout'){
    sec2BtnUlLi.forEach((el, idx)=>{
      if(e.target==el){
        setIn2=setInterval(sec2FadeGallry, 3000);
      }
    })
  }else if(e.type=='click'){
    sec2BtnUlLi.forEach((el, idx)=>{
      if(e.target==el){
        el.classList.add('btnOn');
        j=idx;
        sec2autoFadeFn(j);
      }else{
        el.classList.remove('btnOn');
      }
    })
  }
}
sec2BtnUl.addEventListener('mouseover', sec2BtnFn);
sec2BtnUl.addEventListener('mouseout', sec2BtnFn);
sec2BtnUl.addEventListener('click', sec2BtnFn);

//sec3
const jellycatButtons = document.querySelector('.jellycat.buttons');
const jellycatVisiteButtons = jellycatButtons.querySelectorAll('span.visite-button');
jellycatButtons.addEventListener('click', (e) => {
  jellycatVisiteButtons.forEach((el, idx) => {
    if (e.target == el) {
      popup.classList.add('popupOn');
      popupIframe[1].classList.add('iframeOn');
      if (idx == 0) {
        popupIframe[1].setAttribute('width', "1920px");
        popupIframe[1].setAttribute('height', "860px");
        popupIframe[1].style.borderRadius = "0";
      } else if (idx == 1) {
        popupIframe[1].setAttribute('width', "768px");
        popupIframe[1].setAttribute('height', "840px");
        popupIframe[1].style.borderRadius = "20px";
      } else if (idx == 2) {
        popupIframe[1].setAttribute('width', "480px");
        popupIframe[1].setAttribute('height', "780px");
        popupIframe[1].style.borderRadius = "20px";
      }
    }
  })
})
const sec3Desktop = sections[2].querySelector('.desktop');
const desktopGallery = sec3Desktop.querySelector('.fade-gallery');
const desktopGalleryUl = desktopGallery.querySelector('ul');
const desktopGalleryUlLi = desktopGalleryUl.querySelectorAll('li');
const sec3Tablet = sections[2].querySelector('.tablet');
const tabletGallery = sec3Tablet.querySelector('.fade-gallery');
const tabletGalleryUl = tabletGallery.querySelector('ul');
const tabletGalleryUlLi = tabletGalleryUl.querySelectorAll('li');
const sec3Mobile = sections[2].querySelector('.mobile');
const mobileGallery = sec3Mobile.querySelector('.fade-gallery');
const mobileGalleryUl = mobileGallery.querySelector('ul');
const mobileGalleryUlLi = mobileGalleryUl.querySelectorAll('li');
const sec3Btn = sections[2].querySelector('.items');
const sec3BtnUl = sec3Btn.querySelector('ul');
const sec3BtnUlLi = sec3BtnUl.querySelectorAll('li');
const arrBgSec3Deskop = [];
const arrBgSec3Tablet = [];
const arrBgSec3mobile = [];
for(let c = 0; c < desktopGalleryUlLi.length; c++){
  arrBgSec3Deskop.push(`url(img/jd${c}.jpg) no-repeat 50%/cover`);
  desktopGalleryUlLi[c].style.background = arrBgSec3Deskop[c];
  arrBgSec3Tablet.push(`url(img/jt${c}.jpg) no-repeat 50%/cover`);
  tabletGalleryUlLi[c].style.background = arrBgSec3Tablet[c];
  arrBgSec3mobile.push(`url(img/jm${c}.jpg) no-repeat 50%/cover`);
  mobileGalleryUlLi[c].style.background = arrBgSec3mobile[c];
}
function sec3autoFadeFn(num){
  desktopGalleryUlLi.forEach((el, idx)=>{
    if(idx==num){
      el.classList.add('fadeLi');
    }else{
      el.classList.remove('fadeLi');
    }
  })
  tabletGalleryUlLi.forEach((el, idx)=>{
    if(idx==num){
      el.classList.add('fadeLi');
    }else{
      el.classList.remove('fadeLi');
    }
  })
  mobileGalleryUlLi.forEach((el, idx)=>{
    if(idx==num){
      el.classList.add('fadeLi');
    }else{
      el.classList.remove('fadeLi');
    }
  })

}

let k = -1;
function sec3FadeGallery(){
  if(k>=desktopGalleryUlLi.length-1) k=-1;
  k++;
  sec3autoFadeFn(k);
  sec3BtnUlLi.forEach((el, idx)=>{
    if(idx==k){
      el.classList.add('btnOn');
    }else{
      el.classList.remove('btnOn');
    }
  })
  if(k>=desktopGalleryUlLi.length-1) k=-1;
}
let setIn3 = setInterval(sec3FadeGallery, 3000);
(()=>{sec3FadeGallery()})();

function sec3BtnFn(e){
  if(e.type=='mouseover'){
    sec3BtnUlLi.forEach((el, idx)=>{
      if(e.target==el){
        clearInterval(setIn3);
      }
    })
  }else if(e.type=='mouseout'){
    sec3BtnUlLi.forEach((el, idx)=>{
      if(e.target==el){
        setIn3=setInterval(sec3FadeGallery, 3000);
      }
    })
  }else if(e.type=='click'){
    sec3BtnUlLi.forEach((el, idx)=>{
      if(e.target==el){
        el.classList.add('btnOn');
        k=idx;
        sec3autoFadeFn(k);
      }else{
        el.classList.remove('btnOn');
      }
    })
  }
}
sec3BtnUl.addEventListener('mouseover', sec3BtnFn);
sec3BtnUl.addEventListener('mouseout', sec3BtnFn);
sec3BtnUl.addEventListener('click', sec3BtnFn);

//popup
const close = document.querySelector('span.close');
close.addEventListener('click', () => {
  popup.classList.remove('popupOn');
  popupIframe[0].classList.remove('iframeOn');
  popupIframe[1].classList.remove('iframeOn');
})