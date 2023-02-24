import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__conteiner">
        <button
          className="button button_type_close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <figure className="popup__figure">
          <img className="popup__image" />
          <figcaption className="popup__figcaption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
