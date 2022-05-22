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
  const openedPopup = document.querySelector('.popup_open');
  if(evt.key==="Escape"){
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

export {openPopup,closePopup,openPopupEdit,disabledBtn};
