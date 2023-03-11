import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from '../utils/api.js';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  //переменная состояния текущего пользователя
  const [currentUser, setCurrentUser] = React.useState('');
  React.useEffect(()=> {
    api.getUserInfo()
      .then(res => {setCurrentUser(res)})
      .catch(err => {console.log('Ошибка:' + err)})
  }, [])
  //переменная состояния карточек
  const [cards, setCards] = React.useState([]);
  React.useEffect(()=> {
    api.getInitialCards()
      .then(res => setCards(res))
      .catch(err => {console.log('Ошибка:' + err)})
  }, [])

  //Хуки, управляющие внутренним состоянием
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(undefined);
  
  // Обработчики событий: Изменение внутреннего состояния
  function handleEditAvatarClick() {setIsEditAvatarPopupOpen(true);}
  function handleEditProfileClick() {setIsEditProfilePopupOpen(true);}
  function handleAddPlaceClick() {setIsPlacePopupOpen(true);}
  function handleCardClick(card) {setSelectedCard(card);}
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsPlacePopupOpen(false);
    setSelectedCard(undefined);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i=> i._id === currentUser._id);
    const promise = isLiked ? api.deleteLikeCard(card._id) : api.setLikeCard(card._id);
    promise.then((newCard) => setCards((cards)=> cards.map((card)=> card._id === newCard._id ? newCard : card )))
    .catch(err => {console.log('Ошибка:' + err)})
  }

  function handleCardDelete(card){
    api.setDeleteCard(card._id)
    .then(() => setCards((cards) => cards.filter(i => i._id !== card._id)))
    .catch(err => {console.log('Ошибка:' + err)})
  }

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard
  React.useEffect(()=> {
    function handleCloseEsc(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      } 
    }
    if(isOpen) {
      document.addEventListener("keydown" , handleCloseEsc);
      return () => {
        document.removeEventListener("keydown", handleCloseEsc);
      };
    }
  }, [isOpen])

  function handleCloseClickOverlay(evt) {
    if ((evt.target === evt.currentTarget)) {
      closeAllPopups();
    }
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        cards = {cards}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />

      {/* Редактировать профиль */}
      <PopupWithForm
        name="editprofile"
        title="Редактировать профиль"
        labelSubmit="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        handleCloseClickOverlay={handleCloseClickOverlay}
        children={
          <>
            <label className="popup__label">
              <input
                id="input-name"
                className="popup__input"
                type="text"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="popup__error input-name-error"/>
            </label>
            <label className="popup__label">
              <input
                id="input-about"
                className="popup__input"
                type="text"
                name="about"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__error input-about-error"/>
            </label>
          </>
        }
      />

      {/* Редактировать аватар */}
      <PopupWithForm
        name="editavatar"
        title="Обновить аватар"
        labelSubmit="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        handleCloseClickOverlay={handleCloseClickOverlay}
        children={
          <label className="popup__label">
            <input
              id="input-urlavatar"
              className="popup__input"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error input-urlavatar-error"/>
          </label>
        }
      />

      {/* Добавить карточку */}
      <PopupWithForm
        name="addcard"
        title="Новое место"
        labelSubmit="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        handleCloseClickOverlay={handleCloseClickOverlay}
        children={
          <>
            <label className="popup__label">
              <input
                id="input-title"
                className="popup__input"
                type="text"
                name="title"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__error input-title-error"/>
            </label>
            <label className="popup__label">
              <input
                id="input-url"
                className="popup__input"
                type="url"
                name="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__error input-url-error"/>
            </label>
          </>
        }
      />

      {/* Вы уверены? */}
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        labelSubmit="Да"
        children={<></>}
      />

      {/* Попап с картинкой */}
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups}
        handleCloseClickOverlay={handleCloseClickOverlay} />
    </CurrentUserContext.Provider>
  
  );
}

export default App;
