import React from "react";
import PopupWithForm from "./PopupWithForm";
import useValidation from "./useValidation";

{/* Редактировать аватар */}
function EditAvatarPopup(props) {
  const avatar = React.useRef();
  const {values, errors, onChange, resetValidation, isFormValid} = useValidation();
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({avatar: avatar.current.value});
    resetValidation();
  }
  React.useEffect(() => {
    if (props.isOpen) {
      avatar.current.value = '';
    };
    resetValidation({avatar: ''});
  }, [props.isOpen])

  return (
    <PopupWithForm
      name="editavatar"
      title="Обновить аватар"
      labelSubmit="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleCloseClickOverlay={props.handleCloseClickOverlay}
      onSubmit = {handleSubmit}
      isFormValid={isFormValid}
      children={
        <label className="popup__label">
          <input
            id="input-urlavatar"
            className="popup__input"
            type="url"
            name="avatar"
            ref={avatar}
            onChange={onChange}
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error input-urlavatar-error">{errors.avatar || ''}</span>
        </label>
      }
    />
  );
}
export default EditAvatarPopup;
