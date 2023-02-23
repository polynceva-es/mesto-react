function handleEditAvatarClick(){
  console.log('click edit avatar')
  document.querySelector('.popup_type_form-editavatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  console.log('click edit profile')
  document.querySelector('.popup_type_form-editprofile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  console.log('click add card')
  document.querySelector('.popup_type_form-addcard').classList.add('popup_opened');
}


function Main() {
    return(
      <main className="content page__conteiner">
        <section className="profile">
          <div className="profile__conteiner">
            <a onClick={handleEditAvatarClick} className="profile__img-link" href="#">
              <img className="profile__img" src="#" alt="Фото профиля" />
            </a>
            <div className="profile__info">
              <div className="profile__info-conteiner">
                <h1 className="profile__title"></h1>
                <button
                  onClick={handleEditProfileClick}
                  className="button button_type_edit"
                  type="button"
                  aria-label="Редактировать профиль"
                ></button>
              </div>
              <p className="profile__subtitle"></p>
            </div>
          </div>
          <button
            onClick={handleAddPlaceClick}
            className="button button_type_add"
            type="button"
            aria-label="Добавить карточку"
          ></button>
        </section>

        <section className="elements"></section>
      </main>
    )
}

export default Main;