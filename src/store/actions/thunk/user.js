import axios from 'axios'

import { getToken, logIn, refreshToken } from '../creators/user'
import { store } from '../../store'

const BASE_URL = 'https://painassasin.online/user/'

export const userFunck = (inputUser, func) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE_URL}${func}/`, inputUser)
    dispatch(logIn(data))

    if (func === 'login') {
      const TOKEN = await axios.post(`${BASE_URL}token/`, inputUser)
      dispatch(getToken(TOKEN.data.access))
      const W = dispatch(refreshToken(TOKEN))
      console.log(W)
    }

    console.log(store.getState())
    console.log(store.getState().user.username)
  } catch (error) {
    console.log(error.request.response)
    const ERROR = error.request.response
    alert(ERROR.split(':')[1])
  }
}
