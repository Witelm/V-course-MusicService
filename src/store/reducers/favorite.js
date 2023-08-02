import { FAVORITE_SHOW } from '../actions/types/favorite'

const initialState = {
  show: false,
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITE_SHOW: {
      const { data } = action.payload
      return {
        ...state,
        show: data,
      }
    }
    default:
      return state
  }
}
