import {inputName,inputBio,profileName,profileBio,popupEdit} from './data.js';

//Попап открытие и закрытие

//Функция открытия попапа
function openPopup (popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown',handleEscape);
  document.addEventListener('mousedown', handleOverlay);
}

//Функция закрытия попапа

function closePopup (popup){
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown',handleEscape);
  document.removeEventListener('mousedown', handleOverlay);
};

//Открытие popupEdit

function openPopupEdit () {
  openPopup(popupEdit);
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent ;
}

function handleEscape (evt){
  if(evt.key==="Escape"){
    const openedPopup = document.querySelector('.popup_open');
    openedPopup && closePopup(openedPopup);
  }
  return
}
function handleOverlay (evt){
  if(evt.target.classList.contains('popup_open')){
    closePopup(evt.target);
  }
  return
}

function disabledBtn (btn) {
  btn.classList.add('popup__save-btn_disabled');
  btn.disabled = true;
}


function loading (isLoading, button) {
 if(isLoading){
   button.textContent='Сохранение...'
 } else {
   button.textContent='Сохранить'
 }
}

export {openPopup,closePopup,openPopupEdit,disabledBtn, loading};
