import React, { useState } from 'react'
import s from './Registration.module.css'
import { userFunck } from '../../store/actions/thunk/user'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../store/store'

export const Registration = (props) => {
  const dispatch = useDispatch()
  const [state, setState] = useState(false)
  const user = useSelector((state) => state.user.username)
  const handleState = () => {
    setState(true)
    console.log(user)
    store.getState().user.username ? setState(false) : setState(true)
  }

  // const inputUser = {
  //   username: 'try',
  //   password: 'bed123454321',
  //   email: 'try@mail.ru',
  // }

  // const inputUser = {}
  // const inputUser = {
  //   username: '.as',
  //   password: '.as123454321',
  //   email: 'as@mail.ru',
  // }
  // const inputUser = {
  //   username: 'qq',
  //   password: 'qq123454321',
  //   email: 'qq@mail.ru',
  // }

  const inputUser = {}

  const loginInput = (e) => {
    inputUser.username = e.target.value
  }
  const passInput = (e) => {
    inputUser.password = e.target.value
  }
  const emailInput = (e) => {
    inputUser.email = e.target.value
  }

  const handleFunck = (e) => {
    const target = e.target.textContent
    target === 'Войти'
      ? dispatch(userFunck(inputUser, 'login'))
      : dispatch(userFunck(inputUser, 'signup'))
    setState(false)
  }

  const ComeButton = (
    <button className={s.btn} onClick={handleFunck}>
      Войти
    </button>
  )

  const RegisterButton = (
    <button className={`${state ? s.btn : s.btn_reg}`} onClick={handleState}>
      Зарегистрироваться
    </button>
  )

  const SendButton = (
    <button className={s.btn} onClick={handleFunck}>
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

            <input
              className={s.input}
              placeholder="Логин"
              onChange={loginInput}
            />
            <input
              className={s.input}
              placeholder="Пароль"
              onChange={passInput}
            />

            <input
              className={s.input}
              placeholder="email"
              onChange={emailInput}
            />

            {state ? Input : ComeButton}
            {state ? SendButton : RegisterButton}
          </div>
        </div>
      </div>
    </div>
  )
}
