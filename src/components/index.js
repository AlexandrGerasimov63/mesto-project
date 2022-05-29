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
  closeAddBtn,
  popupAvatar,
  avatarBtn,
  closeAvatarBtn,
  popupFormAvatar
} from './data.js'

import {openPopup,closePopup,openPopupEdit,closePopupEvt} from './utils.js'

import {enableValidation} from './validation.js';

import {submitProfileEdit, submitAddCard, submitAvatar} from './popup';

import {createCard, initialCards} from './card';

import {getInitialCards} from './api'
// ============================================================

enableValidation({
  formSelector: '#form',
  inputSelector: '.popup__item',
  inputElementError: "popup__item_error",
  errorElementClass: 'popup-error_active',
  submitBtn: '.popup__save-btn',
  submitBtnDisabled: 'popup__save-btn_disabled',
});


avatarBtn.addEventListener('click', ()=>{
  openPopup(popupAvatar);
})
closeAvatarBtn.addEventListener('click', ()=>{
  closePopup(popupAvatar);
})

//Добавляем событие на кнопку открытия попапа/закрытия попапа Edit

editBtn.addEventListener('click', () => {
  openPopupEdit();
})
closeEditBtn.addEventListener('click', () => {
  closePopup(popupEdit);
})

// Функция сохранения значения инпутов
popupFormProfileEdit.addEventListener('submit', submitProfileEdit);
// Функция создания карточки
// initialCards.forEach(function(element){
//   const card = createCard(element.name, element.link);
//   elemList.append(card);
// });


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

popupFormAvatar.addEventListener('submit', submitAvatar);
