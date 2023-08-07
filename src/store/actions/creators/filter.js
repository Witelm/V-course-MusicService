import { FILTER_GET } from '../types/filter'

export const filterGet = (key, filter) => ({
  type: FILTER_GET,
  payload: { key, filter },
})
