import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
{/* Редактировать профиль */}
function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  React.useEffect(()=> {
    if(currentUser.name) {
      setName(currentUser.name); 
    }
    if(currentUser.about) {
      setDescription(currentUser.about);
    }
  }, [currentUser, props.isOpen])  
  function handleChangeName(evt) {
    setName(evt.target.value);
  }
  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({name: name, about: description})
  }  
  return (
    <PopupWithForm
      name="editprofile"
      title="Редактировать профиль"
      labelSubmit="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleCloseClickOverlay={props.handleCloseClickOverlay}
      onSubmit = {handleSubmit}
      children={
        <>
          <label className="popup__label">
            <input
              id="input-name"
              className="popup__input"
              type="text"
              value={name}
              name="name"
              placeholder="Имя"
              onChange={handleChangeName}
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error input-name-error" />
          </label>
          <label className="popup__label">
            <input
              id="input-about"
              className="popup__input"
              type="text"
              value={description}
              onChange={handleChangeDescription}
              name="about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error input-about-error" />
          </label>
        </>
      }
    />
  );
}
export default EditProfilePopup;