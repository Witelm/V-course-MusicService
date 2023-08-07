import React, { useState } from 'react'
import s from './Registration.module.css'
import { userFunck } from '../../store/actions/thunk/user'
import { useDispatch } from 'react-redux'

export const Registration = (props) => {
  const dispatch = useDispatch()
  const [isRegistered, setIsRegistered] = useState(false)

  const [stateUser, setStateUser] = useState('')
  const [stateEmail, setStateEmail] = useState('')
  const [statePass, setStatePass] = useState('')
  const [statePassTwo, setStatePassTwo] = useState('')

  const handleState = () => {
    setIsRegistered((prevState) => !prevState)
  }

  // const inputUser = {
  //   username: 'try',
  //   password: 'bed123454321',
  //   email: 'try@mail.ru',
  // }

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

  const handleLogin = () => {
    const inputUser = {
      username: stateUser,
      password: statePass,
      email: stateEmail,
    }
    dispatch(userFunck(inputUser, 'login'))
    clearForm()
  }

  const handleSignup = () => {
    const inputUser = {
      username: stateUser,
      password: statePass,
      email: stateEmail,
    }
    dispatch(userFunck(inputUser, 'signup'))
    clearForm()
    setIsRegistered(false)
  }

  const clearForm = () => {
    setStateUser('')
    setStateEmail('')
    setStatePass('')
    setStatePassTwo('')
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.logblock}>
          <div className={s.block}>
            <div>
              <img src="img/Icon.svg" alt="" />
            </div>
            {isRegistered ? (
              <>
                <input
                  className={s.input}
                  placeholder="Логин"
                  value={stateUser}
                  onChange={(e) => setStateUser(e.target.value)}
                />
                <input
                  className={s.input}
                  placeholder="email"
                  value={stateEmail}
                  onChange={(e) => setStateEmail(e.target.value)}
                />
              </>
            ) : (
              <input
                className={s.input}
                placeholder="Логин (email)"
                value={stateEmail}
                onChange={(e) => setStateEmail(e.target.value)}
              />
            )}
            <input
              className={s.input}
              placeholder="Пароль"
              value={statePass}
              onChange={(e) => setStatePass(e.target.value)}
            />

            {isRegistered ? (
              <>
                <input
                  className={s.input}
                  placeholder="Повторите пароль"
                  value={statePassTwo}
                  onChange={(e) => setStatePassTwo(e.target.value)}
                />
                <button className={s.btn} onClick={handleSignup}>
                  Зарегистрироваться
                </button>
              </>
            ) : (
              <>
                <button className={s.btn} onClick={handleLogin}>
                  Войти
                </button>
                <button className={s.btn} onClick={handleState}>
                  Зарегистрироваться
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
