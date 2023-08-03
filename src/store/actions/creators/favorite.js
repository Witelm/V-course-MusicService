import { FAVORITE_SHOW } from '../types/favorite'

export const favoriteShow = (data, id) => ({
  type: FAVORITE_SHOW,
  payload: { data, id },
})
