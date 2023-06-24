import React from 'react'
import s from './Registration.module.css'
import c from '../../GlobalStyle/Container.module.css'

export const Registration = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.logblock}>
          <div className={s.block}>
            <div>
              <img src="img/Icon.svg" alt="" />
            </div>

            <input className={s.input} placeholder="Логин" />
            <input className={s.input} placeholder="Пароль" />
            <input className={s.input} placeholder="Повторите пароль" />

            {props.user ? (
              <button className={s.btn} onClick={props.handleLogout}>
                Выйти
              </button>
            ) : (
              <button className={s.btn} onClick={props.handleLogin}>
                Войти
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
