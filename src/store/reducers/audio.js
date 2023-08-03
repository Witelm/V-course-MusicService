import { AUDIO_GET } from '../actions/types/audio'

const initialState = {
  src: '',
  author: '',
  album: '',
}

export default function audioReducer(state = initialState, action) {
  switch (action.type) {
    case AUDIO_GET: {
      const { target, author, album } = action.payload
      return {
        ...state,
        src: target,
        author: author,
        album: album,
      }
    }
    default:
      return state
  }
}
