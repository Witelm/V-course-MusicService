import { GET_TOKEN, LOG_IN } from '../actions/types/user'

const initialState = {
  username: '',
  email: '',
  token: '',
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      const { data } = action.payload
      return {
        ...state,
        username: data.username,
        email: data.email,
      }
    }

    case GET_TOKEN: {
      const { data } = action.payload
      return {
        ...state,
        token: data,
      }
    }
    default:
      return state
  }
}
