import {inputName,inputBio,profileName,profileBio,popupEdit} from './data.js';
import {enableValidation} from './validation.js';
//Попап открытие и закрытие

//Функция открытия попапа
function openPopup (popup) {
  popup.classList.add('popup_open');
}

//Функция закрытия попапа

function closePopup (popup){
  popup.classList.remove('popup_open');

};

//Открытие popupEdit

function openPopupEdit () {
  openPopup(popupEdit);
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent ;
  if ((inputName.value = profileName.textContent) && (inputBio.value=profileBio.textContent)){
    document.querySelector('#submit-edit').classList.remove('popup__save-btn_disabled');
    document.querySelector('#submit-edit').disabled=false;

  }
}

function closePopupEvt (evt){
  const popupClassOpen = document.querySelector('.popup_open');
  if(evt.key==="Escape" && popupClassOpen){
    closePopup(popupClassOpen);
  }
  if(evt.target.classList.contains('popup_open')){
    closePopup(evt.target);
  }
}

export {openPopup,closePopup,openPopupEdit, closePopupEvt};
