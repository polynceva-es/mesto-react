import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Form from "../Form";
function Register() {
  const navigate = useNavigate();

  function handleSubmitRegister(evt) {
    evt.preventDefault();
    console.log("Submit Register");
  }
  return (
    <>
      <Header to="sing-up" text="Войти" />
      <button onClick={() => navigate(-1)}>back</button>
      <div className="page__conteiner">
        <Form
          title="Регистрация"
          onSubmit={handleSubmitRegister}
          labelSubmit="Зарегистрироваться"
          isFormValid={true}
          theme="light"
          children={
            <>
              <label className="form__label">
                <input
                  className="form__input form__input_theme-light"
                  type="email"
                  name="email"
                  placeholder="Email"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className="form__error"></span>
              </label>
              <label className="form__label">
                <input
                  className="form__input form__input_theme-light"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className="form__error"></span>
              </label>
            </>
          }
        />
        <p className="form__caption">Уже зарегистрированы? Войти</p>
      </div>
    </>
  );
}

export default Register;
