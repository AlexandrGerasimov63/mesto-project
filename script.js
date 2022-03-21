//Константы кнопок
const addBtn = document.querySelector('.profile__add-btn');
const editBtn = document.querySelector('.profile__edit-btn');
const closeBtn = document.querySelectorAll('.popup__close-btn');
const likeBtn = document.querySelectorAll('.element__like-btn');
const popup = document.querySelectorAll('.popup');
const deleteBtn = document.querySelectorAll('.element__del-btn');

console.log(addBtn);

// ============================================================

//Попап открытие и закрытие

function OpenPopupEdit (){
  let popup = document.querySelector('.popup_type_edit');
  popup.classList.add('popup_open');
}
editBtn.addEventListener('click', OpenPopupEdit);

function OpenAdd (){
  let popup = document.querySelector('.popup_type_add');
  popup.classList.add('popup_open');
}
addBtn.addEventListener('click', OpenAdd);

function closePopup (){
  popup.forEach((item)=>{
    item.classList.remove('popup_open')
  });
};
closeBtn.forEach((item)=>{
  item.addEventListener('click', closePopup);
});

// ============================================================

// Значение инпутов в профиле
const popupForm = document.querySelector('.popup__form');

popupForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  let profileName = document.querySelector('.profile__name');
  let profileBio = document.querySelector('.profile__subtitle');
  const inputName = document.getElementById('profile-name');
  const inputBio = document.getElementById('profile-subtitle');
  profileName.textContent = `${inputName.value}`;
  profileBio.textContent = `${inputBio.value}`;
  closePopup();
});

// =============================================================

// Добавляем карточки
const ElemList = document.querySelector('.elements__list');
const ElemTamplate = document.getElementById('element-template').content;
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
  // {
  //   name: 'Девушка',
  //   link: 'https://img5.goodfon.ru/wallpaper/nbig/0/d2/vladimir-dudorkin-devushka-krasivaia-plate.jpg'
  // }
  ];

initialCards.forEach(function(element){
  const initialCardsElement = ElemTamplate.cloneNode(true);

  initialCardsElement.querySelector('.element__image').src = element.link;
  initialCardsElement.querySelector('.element__title').textContent = element.name;
  activeCard(initialCardsElement);
  ElemList.append(initialCardsElement);
  });

  function activeCard (initialCardsElement) {
    initialCardsElement.querySelector('.element__like-btn').addEventListener('click',(evt)=>{
      evt.target.classList.toggle('.element__like_active-btn');
      });
    initialCardsElement.querySelector('.element__del-btn').addEventListener('click,', (evt)=>{
      const delElement = evt.target.querySelector.closest('.element');
      delElement.remove();
    });

  };
// Добавляем карточки

const popupFormAdd = document.querySelector('.popup__form-add');

popupFormAdd.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  const inputName = document.getElementById('item-name');
  const inputUrl = document.getElementById('item-url');
    // initialCards.unshift({
  //   name: inputName,
  //   link: inputUrl
  // });
  const initialCardsElement = ElemTamplate.cloneNode(true);

  initialCardsElement.querySelector('.element__image').src = inputUrl.value;
  initialCardsElement.querySelector('.element__title').textContent = inputName.value;

  // initialCardsElement.querySelector('.element__like-btn').addEventListener('click',(evt)=>{
  //   evt.target.classList.toggle('.element__like_active-btn');
  //   });
  activeCard(initialCardsElement)
  ElemList.prepend(initialCardsElement);

  inputName.value = '';
  inputUrl.value = '';
  closePopup();
  console.log(initialCards);
  });




// ================================================================================

//Добавляем лайки

// let elementLikeBtn = document.querySelectorAll('.element__like-btn');
// console.log(elementLikeBtn);

// elementLikeBtn.forEach((item)=> {
//   item.addEventListener('click',(evt)=> {
//     evt.target.classList.toggle('element__like_active-btn');
//   });
// });

// Удаление карточки

deleteBtn.forEach((item)=>{
  item.addEventListener('click', (evt)=>{
    let delbtn = evt.target;
    let card = delbtn.closest('.element');
    card.remove();
  })
})



// function deleteCard(evt) {
//   console.log(evt);
//   let deleteButton = evt.target;
//    deleteButton.removeChild('element');
//   // card.remove();
// }

// function deleteCard(evt) {
//   let deleteButton = evt.target;
//   let card = deleteButton.closest('.element');
//   card.remove();
// }

// ==================================================================

