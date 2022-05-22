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
const popupAdd = document.querySelector('.popup_type_add');
const closeAddBtn = popupAdd.querySelector('#close-add');

export {
  addBtn,
  editBtn,
  deleteBtn,
  imagePopup,
  popupFormProfileEdit,
  profileName,
  profileBio,
  inputName,
  inputBio,
  popupEdit,
  closeEditBtn,
  imageInPopup,
  subtitleInPopup,
  inputNameCard,
  inputUrlCard,
  popupFormAdd,
  elemList,
  elemTamplate,
  closeImageBtn,
  popupAdd,
  closeAddBtn
}
