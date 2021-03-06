//Константы
import '../pages/index.css';

import {addBtn,
  editBtn,
  imagePopup,
  popupFormProfileEdit,
  profileName,
  profileBio,
  avatarImg,
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

import {openPopup,closePopup,openPopupEdit} from './utils.js'

import {enableValidation} from './validation.js';

import {submitProfileEdit, submitAddCard, submitAvatar} from './popup';

import {createCard} from './card';

import {getInitialCards, getUser} from './api'
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

Promise.all([getUser(),getInitialCards()])
  .then(([dataUser, dataCard])=>{
    profileName.textContent=dataUser.name;
    profileBio.textContent=dataUser.about;
    avatarImg.src=dataUser.avatar;
    dataCard.forEach((card)=>{
      const cards = createCard(card.name, card.link, card.likes, card.owner._id, card._id, dataUser._id);
      elemList.append(cards)
    })
  })
  .catch((err)=>{console.log(err)});
