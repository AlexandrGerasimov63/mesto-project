import {profileName,profileBio,inputName,inputBio,popupEdit,inputNameCard,inputUrlCard,elemList,popupAdd,submitAvatarBtn,avatarInput,avatarImg,popupAvatar} from './data';
import {closePopup,disabledBtn, loading} from './utils';
import {createCard} from './card';
import { getEditProfile, getEditAvatar,getNewCard, getUser} from './api';

const btnAdd = document.querySelector('#submit-add')
const submitEditBtn = document.querySelector('#submit-edit')
function submitProfileEdit (evt) {
  evt.preventDefault();
  loading(true,submitEditBtn)
  getEditProfile(inputName.value, inputBio.value)
    .then(()=>{
    profileName.textContent = `${inputName.value}`;
    profileBio.textContent = `${inputBio.value}`;
    evt.target.reset();
    closePopup(popupEdit);
  })
    .catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      loading(false,submitEditBtn)
    })
};

// Добавляем карточки с кнопки

function submitAddCard (evt){
  evt.preventDefault();
  loading(true, btnAdd)
  Promise.all([getNewCard(inputNameCard.value, inputUrlCard.value), getUser()])
    .then(([dataCard, dataUser])=>{
      const card = createCard(dataCard.name, dataCard.link, dataCard.likes, dataCard.owner._id,dataCard._id,dataUser._id);
      elemList.prepend(card);
    })
    .then(()=>{
      evt.target.reset();
      disabledBtn(btnAdd);
      closePopup(popupAdd);
    })
  .catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      loading(false, btnAdd)
    })
}


function submitAvatar (evt) {
  evt.preventDefault();
  loading(true,submitAvatarBtn)
  getEditAvatar(avatarInput.value)
  .then(()=>{
      avatarImg.src=avatarInput.value
      closePopup(popupAvatar);
      disabledBtn(submitAvatarBtn);
      evt.target.reset();
    })
    .catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      loading(false,submitAvatarBtn)
    })
}

export {submitProfileEdit, submitAddCard,submitAvatar};
