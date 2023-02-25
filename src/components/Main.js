import React from "react";
import api from "../utils/api.js"

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(()=> {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(res => {
      const [userInfo, initialCards] = res;
      setUserName(userInfo.name); 
      setUserDescription(userInfo.about); 
      setUserAvatar(userInfo.avatar);
      // setCards(initialCards);
      console.log(initialCards)
    })
    
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
            <img className="profile__img" src={userAvatar} alt="Фото профиля" />
          </a>
          <div className="profile__info">
            <div className="profile__info-conteiner">
              <h1 className="profile__title">{userName}</h1>
              <button
                onClick={props.onEditProfile}
                className="button button_type_edit"
                type="button"
                aria-label="Редактировать профиль"
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
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
