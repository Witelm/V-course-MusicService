import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import { apiContent } from './services/content'
import audioReducer from './reducers/audio'
import filterReducer from './reducers/filter'

export const store = configureStore({
  reducer: {
    [apiContent.reducerPath]: apiContent.reducer,
    user: userReducer,
    audio: audioReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiContent.middleware, thunk),
})
