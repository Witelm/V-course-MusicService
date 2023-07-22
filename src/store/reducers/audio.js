import { AUDIO_GET } from '../actions/types/audio'

const initialState = {
  audio: '',
}

export default function audioReducer(state = initialState, action) {
  switch (action.type) {
    case AUDIO_GET: {
      const { data } = action.payload
      return {
        ...state,
        audio: data,
      }
    }
    default:
      return state
  }
}
