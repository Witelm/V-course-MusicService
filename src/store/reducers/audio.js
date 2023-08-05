import { AUDIO_GET } from '../actions/types/audio'

const initialState = {
  src: '',
  author: '',
  album: '',
  array: [],
}

export default function audioReducer(state = initialState, action) {
  switch (action.type) {
    case AUDIO_GET: {
      const { target, author, album, array } = action.payload
      return {
        ...state,
        src: target,
        author: author,
        album: album,
        array: array,
      }
    }
    default:
      return state
  }
}
