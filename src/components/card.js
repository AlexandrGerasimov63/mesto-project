import {imagePopup, elemTamplate} from './data';
import {openPopup} from './utils';
import {getDeleteCard,getPutLikes,getDelLike} from './api'
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');


  // Добавляем карточки в разметку

  const cardData = elemTamplate.querySelector('.element').cloneNode(true);

  function createCard (cardName , cardLink, cardLikes, idOwner, idCard, myId) {
    const cardData = elemTamplate.querySelector('.element').cloneNode(true);
    const cardImageContent = cardData.querySelector('.element__image');
    const cardAccLike = cardData.querySelector('.element__like-acc')
  cardData.querySelector('.element__title').textContent = cardName;
  cardImageContent.src = cardLink;
  cardImageContent.alt = cardName;
  cardAccLike.textContent = `${cardLikes.length}` ;
  if (idOwner !== myId ) {
    cardData.querySelector('.element__del-btn').classList.add('element__del-btn_disabled')
  }
  if (cardLikes.some((like)=>like._id === myId)){
    cardData.querySelector('.element__like-btn').classList.add('element__like_active-btn')
  }
  cardData.querySelector('.element__like-btn').addEventListener('click', function (evt){
    if(evt.target.classList.contains('element__like_active-btn')){
      getDelLike(idCard)
        .then((data)=>{
          cardData.querySelector('.element__like-btn').classList.remove('element__like_active-btn');
          cardAccLike.textContent = `${data.likes.length}`
        })
        .catch((err)=>{
          console.log(err)
        })
    } else {
      getPutLikes(idCard)
      .then((data)=>{
        cardData.querySelector('.element__like-btn').classList.add('element__like_active-btn');
        cardAccLike.textContent = `${data.likes.length}`
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  })
  cardData.querySelector('.element__del-btn').addEventListener('click', (evt)=>{
    getDeleteCard(idCard)
    .then(()=>{
    const delElement = evt.target.closest('.element');
    delElement.remove();
      })
    });
  cardImageContent.addEventListener('click', () => {
    openPopup(imagePopup);
    popupImage.src = cardLink;
    popupSubtitle.textContent = cardName
    popupImage.alt = cardName;
  });
  return cardData;
};





export {createCard};
