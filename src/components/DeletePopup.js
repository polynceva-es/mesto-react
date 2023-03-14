import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePopup(props) {
function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(props.card);

}
    return (
        <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        labelSubmit="Да"
        isOpen={props.card}
        onClose={props.onClose}
        handleCloseClickOverlay={props.handleCloseClickOverlay}
        onSubmit={handleSubmit}
        isFormValid = {true}
        children={<></>}
      />
    )
}

export default DeletePopup;