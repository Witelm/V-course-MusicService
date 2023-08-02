import { FAVORITE_SHOW } from '../types/favorite'

export const favoriteShow = (data) => ({
  type: FAVORITE_SHOW,
  payload: { data },
})
