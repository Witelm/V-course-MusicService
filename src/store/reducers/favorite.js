import { FAVORITE_SHOW } from '../actions/types/favorite'

const initialState = {
  show: 'all',
  id: null,
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITE_SHOW: {
      const { data, id } = action.payload
      return {
        ...state,
        show: data,
        id: id !== null ? id : state.id,
      }
    }
    default:
      return state
  }
}
