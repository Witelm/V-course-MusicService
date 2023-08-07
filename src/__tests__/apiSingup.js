import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { Registration } from '../blocks/Pages/Registration'
import { userFunck } from '../store/actions/thunk/user'

jest.mock('../store/actions/thunk/user', () => ({
  userFunck: jest.fn(),
}))

const mockStore = configureMockStore()
const initialState = {
  user: {},
}

test('clicking "Войти" button dispatches handleLogin action', () => {
  const store = mockStore(initialState)
  store.dispatch = jest.fn()

  const { getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <Registration />
    </Provider>
  )
  const loginButton = getByText('Войти')

  const emailInput = getByPlaceholderText('Логин (email)')
  const passwordInput = getByPlaceholderText('Пароль')

  fireEvent.change(passwordInput, { target: { value: 'testpassword' } })
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } })

  fireEvent.click(loginButton)

  expect(store.dispatch).toHaveBeenCalledWith(
    userFunck(
      {
        password: 'testpassword',
        email: 'test@example.com',
      },
      'login'
    )
  )
})
