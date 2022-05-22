import {profileName,profileBio,inputName,inputBio,popupEdit,inputNameCard,inputUrlCard,elemList,popupAdd} from './data';
import {closePopup,disabledBtn} from './utils';
import {createCard} from './card';

const btnAdd = document.querySelector('#submit-add')

function submitProfileEdit (evt) {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileBio.textContent = `${inputBio.value}`;
  evt.target.reset();
  closePopup(popupEdit);
};

// Добавляем карточки с кнопки

function submitAddCard (evt){
  evt.preventDefault();
  const card = createCard(inputNameCard.value, inputUrlCard.value);
  elemList.prepend(card);
  evt.target.reset();
  disabledBtn(btnAdd)
  closePopup(popupAdd);
}


export {submitProfileEdit, submitAddCard};
