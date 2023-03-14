import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import api from '../utils/api.js';
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  
  
  React.useEffect(()=> {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(res => { 
        const [userInfo, initialCards] = res;
        setCurrentUser(userInfo);
        setCards(initialCards);
      })
      .catch(err => {console.log('Ошибка:' + err)})
  }, [])
  
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
    const promise = isLiked 
      ? api.deleteLikeCard(card._id) 
      : api.setLikeCard(card._id);
    promise
      .then((newCard) => 
        setCards((cards)=> 
          cards.map((card)=> 
            card._id === newCard._id 
              ? newCard 
              : card )))
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

  function handleUpdateUser(formValues) {
    api.setUserInfo(formValues)
      .then(res => {setCurrentUser(res); closeAllPopups()})
      .catch(err => {console.log('Ошибка:' + err)})
  }

  function handleUpdateAvatar(formValue) {
    api.setUserAvatar(formValue)
      .then(res => {setCurrentUser(res); closeAllPopups()})
      .catch(err => {console.log('Ошибка:' + err)})
  }

  function handleAddPlaceSubmit(formValues) {
    api.setNewCard(formValues)
      .then(res => {setCards([res, ...cards]); closeAllPopups()})
      .catch(err => {console.log('Ошибка:' + err)})
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
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        handleCloseClickOverlay={handleCloseClickOverlay}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}      
        onClose={closeAllPopups}
        handleCloseClickOverlay={handleCloseClickOverlay}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        handleCloseClickOverlay={handleCloseClickOverlay}
        onAddPlace={handleAddPlaceSubmit}
      />
      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups}
        handleCloseClickOverlay={handleCloseClickOverlay}
      />
      {/* Вы уверены? */}
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        labelSubmit="Да"
        children={<></>}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
