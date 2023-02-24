import React from "react";

function Main(props) {
  return (
    <main className="content page__conteiner">
      <section className="profile">
        <div className="profile__conteiner">
          <a
            onClick={props.onEditAvatar}
            className="profile__img-link"
            href="#"
          >
            <img className="profile__img" src="#" alt="Фото профиля" />
          </a>
          <div className="profile__info">
            <div className="profile__info-conteiner">
              <h1 className="profile__title"></h1>
              <button
                onClick={props.onEditProfile}
                className="button button_type_edit"
                type="button"
                aria-label="Редактировать профиль"
              ></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="button button_type_add"
          type="button"
          aria-label="Добавить карточку"
        ></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;
