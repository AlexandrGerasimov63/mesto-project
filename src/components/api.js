import {profileName,profileBio,elemList,avatarImg} from './data'
import {createCard} from './card';



const config = {
  url:'https://nomoreparties.co/v1/plus-cohort-10/',
  headers: {
    authorization: 'd9c7dee1-5b19-458d-a134-081aa4aad650',
    'Content-Type': 'application/json'
  }
}

function response (res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status} - ${res.statusText}`);
};


function getEditProfile (name, bio){
  return fetch (`${config.url}/users/me`,{
    method: 'PATCH',
    headers: config.headers,
    body:JSON.stringify({
      name: name,
      about: bio
    })
  })
  .then(response)
}

function getEditAvatar (url) {
  return fetch (`${config.url}/users/me/avatar`,{
    method: 'PATCH',
    headers: config.headers,
    body:JSON.stringify({
      avatar: url
    })
  })
  .then(response)
}


function getNewCard (cardName, cardLink){
  return fetch(`${config.url}/cards`, {
    method:'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
  .then(response)
}

function getPutLikes (id){
  return fetch(`${config.url}/cards/likes/${id}`,{
    method: "PUT",
    headers: config.headers
  })
  .then(response)
}

function getDelLike (id){
  return fetch(`${config.url}/cards/likes/${id}`,{
    method: "DELETE",
    headers: config.headers
  })
  .then(response)
}



function getUser () {
  return fetch (`${config.url}/users/me`,{
    headers: config.headers
  })
  .then(response)
}

function getInitialCards () {
  return fetch (`${config.url}/cards`,{
    headers: config.headers
  })
  .then(response)
}

function getDeleteCard (id) {
  return fetch (`${config.url}/cards/${id}`,{
    method: 'DELETE',
    headers: config.headers
  })
  .then(response)
}

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

export {getEditProfile,getEditAvatar,getNewCard,getDeleteCard,getUser, getInitialCards, getPutLikes,getDelLike}
