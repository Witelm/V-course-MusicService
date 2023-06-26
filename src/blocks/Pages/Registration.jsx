import React, { useState } from 'react'
import s from './Registration.module.css'

export const Registration = (props) => {
  const [state, setState] = useState(false)
  const handleState = () => {
    setState(!state)
  }

  const ComeButton = (
    <button className={s.btn} onClick={props.handleLogin}>
      Войти
    </button>
  )
  const RegisterButton = (
    <button className={s.btn} onClick={handleState}>
      Зарегистрироваться
    </button>
  )
  const Input = <input className={s.input} placeholder="Повторите пароль" />

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

            {state ? Input : ComeButton}
            {RegisterButton}
          </div>
        </div>
      </div>
    </div>
  )
}
