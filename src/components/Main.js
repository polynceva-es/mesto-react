import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js"
import Card from "./Card.js";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(()=> {
    api.getInitialCards()
      .then(res => setCards(res))
      .catch(err => {console.log('Ошибка:' + err)})
  }, [])

  return (
    <main className="content page__conteiner">
      <section className="profile">
        <div className="profile__conteiner">
          <a
            onClick={props.onEditAvatar}
            className="profile__img-link"
            href="#"
          >
            <img className="profile__img" src={currentUser.avatar} alt="Фото профиля" />
          </a>
          <div className="profile__info">
            <div className="profile__info-conteiner">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                onClick={props.onEditProfile}
                className="button button_type_edit"
                type="button"
                aria-label="Редактировать профиль"
              />
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="button button_type_add"
          type="button"
          aria-label="Добавить карточку"
        />
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
        ))
       }
      </section>
    </main>
  );
}

export default Main;
