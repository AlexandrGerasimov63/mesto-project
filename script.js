//Константы
const addBtn = document.querySelector('.profile__add-btn');
const editBtn = document.querySelector('.profile__edit-btn');
const deleteBtn = document.querySelectorAll('.element__del-btn');
const imagePopup = document.querySelector('.popup_type_image');
const popupFormProfileEdit = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__subtitle');
const inputName = document.getElementById('profile-name');
const inputBio = document.getElementById('profile-subtitle');
const popupEdit = document.querySelector('.popup_type_edit')
const closeEditBtn = document.querySelector('#close_edit');
const imageInPopup = document.querySelector('.popup__image');
const subtitleInPopup = document.querySelector('.popup__subtitle');
const inputNameCard = document.querySelector('#item-name');
const inputUrlCard = document.querySelector('#item-url');
const popupFormAdd = document.querySelector('.popup__form-add');
const elemList = document.querySelector('.elements__list');
const elemTamplate = document.getElementById('element-template').content;
const closeImageBtn = document.querySelector('#close-image');

// ============================================================

//Попап открытие и закрытие

//Функция открытия попапа
function openedPopup (popup) {
  popup.classList.add('popup_open');
}

//Функция закрытия попапа

function closedPopup (popup){
  popup.classList.remove('popup_open');
}

//Открытие popupEdit

function openedPopupEdit (popup) {
  popup.classList.add('popup_open');
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent ;
}

//Добавляем событие на кнопку открытия попапа/закрытия попапа Edit

editBtn.addEventListener('click', () => {
  openedPopupEdit(popupEdit);
})
closeEditBtn.addEventListener('click', () => {
  closedPopup(popupEdit);
})

// ============================================================


// Функция сохранения значения инпутов
function submitProfileEdit (evt) {
  evt.preventDefault();
  profileName.textContent = `${inputName.value}`;
  profileBio.textContent = `${inputBio.value}`;
  closedPopup(popupEdit);
};

popupFormProfileEdit.addEventListener('submit', submitProfileEdit);

// =============================================================


//Функция создания карточки

function cardCreate (CardName , CardLink) {
  cardData = elemTamplate.querySelector('.element').cloneNode(true);
  cardImageContent = cardData.querySelector('.element__image');
  cardData.querySelector('.element__title').textContent = CardName;
  cardImageContent.src = CardLink;
  cardImageContent.alt = CardName;
  cardData.querySelector('.element__like-btn').addEventListener('click',(evt)=>{
    evt.target.classList.toggle('element__like_active-btn');
    });
  cardData.querySelector('.element__del-btn').addEventListener('click', (evt)=>{
    const delElement = evt.target.closest('.element');
    delElement.remove();
    });
  cardImageContent.addEventListener('click', () => {
    openedPopup(imagePopup);
  document.querySelector('.popup__image').src = CardLink;
  document.querySelector('.popup__subtitle').textContent = CardName
  document.querySelector('.popup__image').alt = CardName;
  });
  return cardData;
};

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

initialCards.forEach(function(element){
  const card = cardCreate(element.name, element.link);
  elemList.append(card);
});


//Закрытие попапа image


closeImageBtn.addEventListener('click', () => {
  closedPopup(imagePopup);
});
//======================================================================================

//Открытие/закрытие попапа добавление карточки
const popupAdd = document.querySelector('.popup_type_add');
const closeAddBtn = popupAdd.querySelector('#close-add');
console.log(closeAddBtn);
addBtn.addEventListener('click', () => {
  openedPopup(popupAdd);
});
closeAddBtn.addEventListener('click', () => {
  closedPopup(popupAdd);
})

// Добавляем карточки с кнопки

function submitAddCard (evt){
  evt.preventDefault();
  const card = cardCreate(inputNameCard.value, inputUrlCard.value);
  elemList.prepend(card);
  inputNameCard.value = '';
  inputUrlCard.value = '';
  closedPopup(popupFormAdd)
}


popupFormAdd.addEventListener('submit', submitAddCard);
