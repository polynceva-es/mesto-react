import React from "react";

import PopupWithForm from "./PopupWithForm";
{/* Добавить карточку */}
function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');
  function handleChangeTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleChangeUrl(evt) {
    setUrl(evt.target.value);
  }
 function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({title: title, url: url})
  }
  React.useEffect(() => {
    if(!props.isOpen) {
      setTitle('');
      setUrl('');
    }
  })
  return (
    <PopupWithForm
      name="addcard"
      title="Новое место"
      labelSubmit="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleCloseClickOverlay={props.handleCloseClickOverlay}
      onSubmit = {handleSubmit}
      children={
        <>
          <label className="popup__label">
            <input
              id="input-title"
              className="popup__input"
              type="text"
              name="title"
              value={title}
              placeholder="Название"
              onChange={handleChangeTitle}
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error input-title-error" />
          </label>
          <label className="popup__label">
            <input
              id="input-url"
              className="popup__input"
              type="url"
              name="url"
              value={url}
              placeholder="Ссылка на картинку"
              onChange={handleChangeUrl}
              required
            />
            <span className="popup__error input-url-error" />
          </label>
        </>
      }
    />
  );
}
export default AddPlacePopup;
