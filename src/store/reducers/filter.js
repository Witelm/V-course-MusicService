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
        if (state.author.includes(filter)) {
          return {
            ...state,
            author: state.author.filter((item) => item !== filter),
          }
        }
        return { ...state, author: [...state.author, filter] }
      }
      if (key === 'year') {
        if (state.year.includes(filter)) {
          return {
            ...state,
            year: state.year.filter((item) => item !== filter),
          }
        }
        return { ...state, year: [...state.year, filter] }
      } else {
        if (state.genre.includes(filter)) {
          return {
            ...state,
            genre: state.genre.filter((item) => item !== filter),
          }
        }
        return { ...state, genre: [...state.genre, filter] }
      }
    }

    default:
      return state
  }
}
