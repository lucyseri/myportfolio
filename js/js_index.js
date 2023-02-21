'use strict';
//scroll event
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const sec1 = sections[0];
const sec2 = sections[1];
const sec2Title = sec2.querySelector('h2');
const sec3 = sections[2];
const sec3Title = sec3.querySelector('.title>.left>h2');
const sec3Preview = sec3.querySelector('.preview-con');
const sec4 = sections[3];
const sec4Title = sec4.querySelector('.title>.left>h2');
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
  if(value >= sec2.offsetTop + sec2.offsetHeight / 2){
    sec3Title.classList.add('titleIn');
  }else{
    sec3Title.classList.remove('titleIn');
  }
  if(value >= sec3Preview.offsetTop + 150){
    sec4Title.classList.add('titleIn');
  }else{
    sec4Title.classList.remove('titleIn');
  }
});
//section2-buttons
function sec2copyBtnFn(){
  sec2MailBtn.innerText = "Copy!";
  sec2MailBtn.style.fontWeight = 400;
}
const sec2MailInput = sec2.querySelector('#mail');
const sec2MailInputValue = sec2MailInput.value;
const sec2MailBtn = sec2.querySelector('#mail-btn');
const sec2NotionInput = sec2.querySelector('#notion');
const sec2NotionBtn = sec2.querySelector('#notion-btn');
sec2MailBtn.addEventListener('click', ()=>{
  window.navigator.clipboard.writeText(sec2MailInputValue).then(()=>{
    sec2MailBtn.innerText = "Copyed!"
    sec2MailBtn.style.fontWeight = '700';
    setTimeout(sec2copyBtnFn, 2000);
  })
})
sec2NotionBtn.addEventListener('click', ()=>{
  window.open("https://www.notion.so/invite/d1bd0934758f7db8a3d8217f9c48d180c405a9f6");
})
//secion3, 4 -popup
const popup = document.querySelector('.popup-con');
const popupOut = popup.querySelector('span');
const popupIframe = popup.querySelector('iframe');
const sec3draftImg = sec3.querySelector('.draft>img');
const sec3buttons = sec3.querySelector('.buttons');
const sec3buttonsBtn = sec3buttons.querySelector('p');
sec3draftImg.addEventListener('mouseover', ()=>{
  sec3draftImg.setAttribute('src', "img/victorm_mouseover_img.jpg");
});
sec3draftImg.addEventListener('mouseout', ()=>{
  sec3draftImg.setAttribute('src', "img/vixtorm_pages.jpg");
})
sec3buttonsBtn.addEventListener('click', ()=>{
  popupIframe.setAttribute('src', 'https://lucyseri.github.io/vixtorm/');
  popup.classList.add('popupOn');
  popupIframe.setAttribute('width', '1920px');
  popupIframe.setAttribute('height', '860px');
  popupIframe.style.borderRadius = "0";
})
const sec4draftImg = sec4.querySelector('.draft>img');
const sec4buttons = sec4.querySelector('.buttons');
const sec4buttonsBtn = sec4buttons.querySelectorAll('p');
sec4buttons.addEventListener('click', (e)=>{
  sec4buttonsBtn.forEach((el, idx)=>{
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
//footer-button
const footer = document.querySelector('footer');
const footerInput = footer.querySelector('input');
const footerInputValue = footerInput.value;
const footerButton = footer.querySelector('button');
function footerBtnFn(){
  footerButton.innerText = "Click!"
  footerButton.style.fontWeight = '400';
}
footerInput.addEventListener('click', ()=>{
  window.navigator.clipboard.writeText(footerInputValue).then(()=>{
    footerButton.innerText = "Copyed!"
    footerButton.style.fontWeight = '700';
    setTimeout(footerBtnFn, 2000);
  })
})