import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import { apiContent } from './services/content'
import audioReducer from './reducers/audio'
import filterReducer from './reducers/filter'
import favoriteReducer from './reducers/favorite'

export const store = configureStore({
  reducer: {
    [apiContent.reducerPath]: apiContent.reducer,
    user: userReducer,
    audio: audioReducer,
    filter: filterReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiContent.middleware, thunk),
})
