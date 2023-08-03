import { AUDIO_GET } from '../types/audio'

export const audioGet = (target, author, album) => ({
  type: AUDIO_GET,
  payload: { target, author, album },
})
