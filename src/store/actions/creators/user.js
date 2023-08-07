import { GET_TOKEN, REFRESH_TOKEN, SIGHN_IN, LOG_IN } from '../types/user'

export const getToken = (data) => ({
  type: GET_TOKEN,
  payload: { data },
})

export const logIn = (data) => ({
  type: LOG_IN,
  payload: { data },
})

export const refreshToken = (data) => ({
  type: REFRESH_TOKEN,
  payload: { data },
})

export const signIn = (data) => ({
  type: SIGHN_IN,
  payload: { data },
})
