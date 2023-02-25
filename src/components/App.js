import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  //Хуки, управляющие внутренним состоянием
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsPlacePopupOpen] = React.useState(false);
  
  // Обработчики событий: Изменение внутреннего состояния
  function handleEditAvatarClick() {setIsEditAvatarPopupOpen(true);}
  function handleEditProfileClick() {setIsEditProfilePopupOpen(true);}
  function handleAddPlaceClick() {setIsPlacePopupOpen(true);}
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsPlacePopupOpen(false);
  }
  function handleCloseEsc(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    } 
  }

  React.useEffect(() => {
    window.addEventListener("keydown" , handleCloseEsc);
    return () => {
      window.removeEventListener("keydown", handleCloseEsc);
    };
  });

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      {/* Редактировать профиль */}
      <PopupWithForm
        name="editprofile"
        title="Редактировать профиль"
        labelSubmit="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__label">
              <input
                id="input-name"
                className="popup__input"
                type="text"
                name="name"
                placeholder="Имя"
              />
              <span className="popup__error input-name-error"></span>
            </label>
            <label className="popup__label">
              <input
                id="input-about"
                className="popup__input"
                type="text"
                name="about"
                placeholder="О себе"
              />
              <span className="popup__error input-about-error"></span>
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
        children={
          <label className="popup__label">
            <input
              id="input-urlavatar"
              className="popup__input"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
            />
            <span className="popup__error input-urlavatar-error"></span>
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
        children={
          <>
            <label className="popup__label">
              <input
                id="input-title"
                className="popup__input"
                type="text"
                name="title"
                placeholder="Название"
              />
              <span className="popup__error input-title-error"></span>
            </label>
            <label className="popup__label">
              <input
                id="input-url"
                className="popup__input"
                type="url"
                name="url"
                placeholder="Ссылка на картинку"
              />
              <span className="popup__error input-url-error"></span>
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
      <ImagePopup />
    </div>
  );
}

export default App;
