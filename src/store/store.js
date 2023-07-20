import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import { apiContent } from './services/content'

export const store = configureStore({
  reducer: {
    [apiContent.reducerPath]: apiContent.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiContent.middleware, thunk),
})
