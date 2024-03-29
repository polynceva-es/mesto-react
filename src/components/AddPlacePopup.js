import React from "react";
import PopupWithForm from "./PopupWithForm";
import useValidation from "./useValidation";

{/* Добавить карточку */}
function AddPlacePopup(props) {
  const {values, errors, onChange, resetValidation, isFormValid} = useValidation();
  React.useEffect(() => {
    resetValidation({title: '', url: ''});
  }, [props.isOpen]);

  // Первый вариант
  // const [title, setTitle] = React.useState('');
  // const [url, setUrl] = React.useState('');
  // function handleChangeTitle(evt) {
  //   setTitle(evt.target.value);
  // }
  // function handleChangeUrl(evt) {
  //   setUrl(evt.target.value);
  // }
  // React.useEffect(() => {
  //   if(!props.isOpen) {
  //     // setTitle('');
  //     // setUrl('');
  //   }
  // }, [props.isOpen])

  //Второй вариант
  // const[values, setValues] = React.useState({title: '', url: ''});
  // const[error, setError] = React.useState({title: '', url: ''});
  // function onChange(evt) {
  //   const error = evt.target.validationMessage;
  //   const {name, value} = evt.target;
  //   setValues((values) => ({...values, [name]: value}))
  //   setError((errors) => ({...errors, [name]: error}))
  // }


 function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({title: values.title, url: values.url});
    resetValidation();
  }


  return (
    <PopupWithForm
      name="addcard"
      title="Новое место"
      labelSubmit="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleCloseClickOverlay={props.handleCloseClickOverlay}
      onSubmit = {handleSubmit}
      isFormValid={isFormValid}
      children={
        <>
          <label className="popup__label">
            <input
              id="input-title"
              className="popup__input"
              type="text"
              name="title"
              value={values.title || ''}
              placeholder="Название"
              // onChange={handleChangeTitle}
              onChange={onChange}
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error input-title-error">{errors.title || ''}</span>
          </label>
          <label className="popup__label">
            <input
              id="input-url"
              className="popup__input"
              type="url"
              name="url"
              value={values.url || ''}
              placeholder="Ссылка на картинку"
              // onChange={handleChangeUrl}
              onChange={onChange}
              required
            />
            <span className="popup__error input-url-error">{errors.url || ''}</span>
          </label>
        </>
      }
    />
  );
}
export default AddPlacePopup;
