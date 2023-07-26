import { FAVORITE_SHOW } from '../actions/types/favorite'

const initialState = {
  show: false,
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITE_SHOW: {
      return {
        ...state,
        show: !state.show,
      }
    }
    default:
      return state
  }
}
