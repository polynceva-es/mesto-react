import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_form popup_type_form-${props.name} ` + (props.isOpen && 'popup_opened') }>
      <div className="popup__conteiner popup__conteiner_form">
        <button
          className="button button_type_close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form popup__form_edit"
          name={props.name}
          action="#"
          method="get"
          noValidate
        >
          {props.children}
          <button
            className="button button_type_submit"
            type="submit"
            name="saveProfileInfo"
            aria-label={props.labelSubmit}
          >
            {props.labelSubmit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
