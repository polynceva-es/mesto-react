import React from "react";
import PopupWithForm from "./PopupWithForm";
{/* Редактировать аватар */}
function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="editavatar"
      title="Обновить аватар"
      labelSubmit="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleCloseClickOverlay={props.handleCloseClickOverlay}
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
          <span className="popup__error input-urlavatar-error" />
        </label>
      }
    />
  );
}
export default EditAvatarPopup;
