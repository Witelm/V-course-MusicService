import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import reportWebVitals from './reportWebVitals'

import { GlobalStyle } from './GlobalStyle/GlobalStyle'
import { AppRouters } from './blocks/Routes/AppRouters'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />

        <AppRouters />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
