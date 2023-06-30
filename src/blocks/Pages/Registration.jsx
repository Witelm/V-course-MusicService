import React, { useState } from 'react'
import s from './Registration.module.css'

export const Registration = (props) => {
  const [state, setState] = useState(false)
  const handleState = () => {
    setState(true)
  }

  const ComeButton = (
    <button className={s.btn} onClick={props.handleLogin}>
      Войти
    </button>
  )
  const RegisterButton = (
    <button className={`${state ? s.btn : s.btn_reg}`} onClick={handleState}>
      Зарегистрироваться
    </button>
  )

  const SendButton = (
    <button
      className={s.btn}
      onClick={() => {
        const temp = document.querySelectorAll('input')[0].value
        localStorage.setItem('user', JSON.stringify(temp))
        setState(false)

        console.log('send request', temp, localStorage)

        document.querySelectorAll('input')[0].value = ''
      }}
    >
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
            {state ? SendButton : RegisterButton}
          </div>
        </div>
      </div>
    </div>
  )
}
