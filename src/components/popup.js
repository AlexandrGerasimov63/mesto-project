import {profileName,profileBio,inputName,inputBio,popupEdit,inputNameCard,inputUrlCard,elemList,popupAdd} from './data';
import {closePopup} from './utils';
import {createCard} from './card';

function submitProfileEdit (evt) {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileBio.textContent = `${inputBio.value}`;
  closePopup(popupEdit);
};

// Добавляем карточки с кнопки

function submitAddCard (evt){
  evt.preventDefault();
  const card = createCard(inputNameCard.value, inputUrlCard.value);
  elemList.prepend(card);
  inputNameCard.value = '';
  inputUrlCard.value = '';
  closePopup(popupAdd)
}

export {submitProfileEdit, submitAddCard};
