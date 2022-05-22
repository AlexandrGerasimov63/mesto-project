import {imagePopup, elemTamplate} from './data';
import {openPopup} from './utils';

const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

  // Добавляем карточки в разметку




function createCard (cardName , cardLink) {
  const cardData = elemTamplate.querySelector('.element').cloneNode(true);
  const cardImageContent = cardData.querySelector('.element__image');
  cardData.querySelector('.element__title').textContent = cardName;
  cardImageContent.src = cardLink;
  cardImageContent.alt = cardName;
  cardData.querySelector('.element__like-btn').addEventListener('click',(evt)=>{
    evt.target.classList.toggle('element__like_active-btn');
    });
  cardData.querySelector('.element__del-btn').addEventListener('click', (evt)=>{
    const delElement = evt.target.closest('.element');
    delElement.remove();
    });
  cardImageContent.addEventListener('click', () => {
    openPopup(imagePopup);
  popupImage.src = cardLink;
  popupSubtitle.textContent = cardName
  popupImage.alt = cardName;
  });
  return cardData;
};

export {createCard, initialCards};
