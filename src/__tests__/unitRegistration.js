import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { userFunck } from '../store/actions/thunk/user'
import { Registration } from '../blocks/Pages/Registration'
import '@testing-library/jest-dom/extend-expect'

jest.mock('../store/actions/thunk/user', () => ({
  userFunck: jest.fn(),
}))

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}))

describe('<Registration/>', () => {
  describe('render button "Войти" correctly', () => {
    it('should render button correctly', () => {
      const { getByText } = render(<Registration />)
      const button = getByText('Войти')
      expect(button).toBeInTheDocument()
    })
  })
  describe('render button "Зарегистрироваться" correctly', () => {
    it('should render button correctle', () => {
      const { getByText } = render(<Registration />)
      const button = getByText('Зарегистрироваться')
      expect(button).toBeInTheDocument()
    })
  })
})
