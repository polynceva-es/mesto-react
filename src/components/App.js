import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />

      {/* Редактировать профиль */}
      <PopupWithForm 
        name="editprofile" 
        title="Редактировать профиль" 
        labelSubmit="Сохранить"
        children={
          <>
          <label className="popup__label">
              <input
                id="input-name"
                className="popup__input"
                type="text"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
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
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__error input-about-error"></span>
            </label>
            </>
        } />
      
      {/* Редактировать аватар */}
      <PopupWithForm 
        name="editavatar" 
        title="Обновить аватар" 
        labelSubmit="Сохранить"
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
              <span className="popup__error input-urlavatar-error"></span>
            </label>
        } />

      {/* Добавить карточку */}
      <PopupWithForm 
        name="addcard" 
        title="Новое место" 
        labelSubmit="Создать" 
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
          <span className="popup__error input-title-error"></span>
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
          <span className="popup__error input-url-error"></span>
        </label>
        </>
        }/>

      {/* Вы уверены? */}
      <PopupWithForm 
        name="delete-card" 
        title="Вы уверены?" 
        labelSubmit="Да" 
        children={<></>}/>
      {/* 
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
      </div> */}

      </div>
  );
}

export default App;
