import React from 'react'
import ReactDOM from 'react-dom/client'
//import './css/style.css'

import reportWebVitals from './reportWebVitals'
import Container from './container'

import { GlobalStyle } from './GlobalStyle/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Container />
  </React.StrictMode>
)

reportWebVitals()
