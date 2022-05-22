//Константы
import '../pages/index.css';

import {addBtn,
  editBtn,
  imagePopup,
  popupFormProfileEdit,
  inputName,
  inputBio,
  popupEdit,
  closeEditBtn,
  popupFormAdd,
  elemList,
  closeImageBtn,
  popupAdd,
  closeAddBtn} from './data.js'

import {openPopup,closePopup,openPopupEdit,closePopupEvt} from './utils.js'

import {enableValidation} from './validation.js';

import {submitProfileEdit, submitAddCard} from './popup';

import {createCard, initialCards} from './card';
// ============================================================

enableValidation({
  formSelector: '#form',
  inputSelector: '.popup__item',
  inputElementError: "popup__item_error",
  errorElementClass: 'popup-error_active',
  submitBtn: '.popup__save-btn',
  submitBtnDisabled: 'popup__save-btn_disabled',
});

//Добавляем событие на кнопку открытия попапа/закрытия попапа Edit

editBtn.addEventListener('click', () => {
  openPopupEdit();
})
closeEditBtn.addEventListener('click', () => {
  closePopup(popupEdit);
  inputName.value = '';
  inputBio.value = '';
})
// События попапов
document.addEventListener('keydown' , closePopupEvt);
document.addEventListener('click', closePopupEvt);
// Функция сохранения значения инпутов
popupFormProfileEdit.addEventListener('submit', submitProfileEdit);
//Функция создания карточки
initialCards.forEach(function(element){
  const card = createCard(element.name, element.link);
  elemList.append(card);
});
//Закрытие попапа image
closeImageBtn.addEventListener('click', () => {
  closePopup(imagePopup);
});
//Открытие/закрытие попапа добавление карточки

addBtn.addEventListener('click', () => {
  openPopup(popupAdd);
});
closeAddBtn.addEventListener('click', () => {
  closePopup(popupAdd);
})
popupFormAdd.addEventListener('submit', submitAddCard);

// enableValidation();
