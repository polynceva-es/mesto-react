import React from "react";

import PopupWithForm from "./PopupWithForm";
{/* Добавить карточку */}
function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="addcard"
      title="Новое место"
      labelSubmit="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleCloseClickOverlay={props.handleCloseClickOverlay}
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
            <span className="popup__error input-title-error" />
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
            <span className="popup__error input-url-error" />
          </label>
        </>
      }
    />
  );
}
export default AddPlacePopup;
