import { AUDIO_GET } from '../types/audio'

export const audioGet = (data) => ({
  type: AUDIO_GET,
  payload: { data },
})
