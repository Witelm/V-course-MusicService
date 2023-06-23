import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import { GlobalStyle } from './GlobalStyle/GlobalStyle'
import { AppRouters } from './blocks/Routes/AppRouters'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />

      <AppRouters />
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
