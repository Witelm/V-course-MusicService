import { FILTER_GET } from '../actions/types/filter'

const initialState = {
  author: [],
  year: [],
  genre: [],
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_GET: {
      const { key, filter } = action.payload
      if (key === 'author') {
        return { ...state, author: [...state.author, filter] }
      }
      if (key === 'year') {
        return { ...state, year: [...state.year, filter] }
      } else return { ...state, genre: [...state.genre, filter] }
    }

    default:
      return state
  }
}
