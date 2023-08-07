import { AUDIO_GET } from '../types/audio'

export const audioGet = (target, author, album, array) => ({
  type: AUDIO_GET,
  payload: { target, author, album, array },
})
