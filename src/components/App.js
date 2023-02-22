function App() {
  return (
    <div>
      <header className="header page__conteiner">
        <img
          className="header__logo"
          src="<%=require('./images/logo.svg')%>"
          alt="Логотип Место"
        />
      </header>
      <main className="content page__conteiner">
        <section className="profile">
          <div className="profile__conteiner">
            <a className="profile__img-link" href="#">
              <img className="profile__img" src="#" alt="Фото профиля" />
            </a>
            <div className="profile__info">
              <div className="profile__info-conteiner">
                <h1 className="profile__title"></h1>
                <button
                  className="button button_type_edit"
                  type="button"
                  aria-label="Редактировать профиль"
                ></button>
              </div>
              <p className="profile__subtitle"></p>
            </div>
          </div>
          <button
            className="button button_type_add"
            type="button"
            aria-label="Добавить карточку"
          ></button>
        </section>

        <section className="elements"></section>
      </main>

      <footer className="footer page__conteiner">
        <p className="footer__caption">&copy; 2023 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_form popup_type_form-editprofile">
        <div className="popup__conteiner popup__conteiner_form">
          <button
            className="button button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_edit"
            name="form-edit"
            action="#"
            method="get"
            noValidate
          >
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
            <button
              className="button button_type_submit"
              type="submit"
              name="saveProfileInfo"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_form popup_type_form-editavatar">
        <div className="popup__conteiner popup__conteiner_form">
          <button
            className="button button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form popup__form_editavatar"
            name="form-editavatar"
            action="#"
            method="get"
            noValidate
          >
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
            <button
              className="button button_type_submit"
              type="submit"
              name="saveProfileAvatar"
              aria-label="Сохранить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_form popup_type_form-addcard">
        <div className="popup__conteiner popup__conteiner_form">
          <button
            className="button button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_add"
            name="form-add"
            action="#"
            method="get"
            noValidate
          >
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
            <button
              className="button button_type_submit"
              type="submit"
              name="createdCard"
              aria-label="Создать"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

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

      <div className="popup popup_type_form popup_type_delete-card">
        <div className="popup__conteiner popup__conteiner_form">
          <button
            className="button button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
          <h2 className="popup__title popup__title_type-delete">Вы уверены?</h2>
          <button
            className="button button_type_submit button_type_deleteCard"
            type="button"
            name="deleteCard"
            aria-label="Да"
          >
            Да
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
