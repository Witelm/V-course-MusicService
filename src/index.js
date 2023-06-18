import React from 'react'
import ReactDOM from 'react-dom/client'

// import './css/style.css'

import reportWebVitals from './reportWebVitals'
import Container from './container'

import { createGlobalStyle } from 'styled-components'

const root = ReactDOM.createRoot(document.querySelector('.wrapper'))

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('./css/fonts/Stratos-Regular.woff2') format('woff2'),
    url('./css/fonts/Stratos-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
}

.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
}

::-webkit-scrollbar {
  border: 10px solid transparent;
  background-color: #ffffff;
  border-radius: 100px;
  background-clip: content-box;
}

::-webkit-slider-thumb {
  background-color: #4e4e4e;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 100px;
  border: 8px solid #4e4e4e;
}

`

root.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <Container />
    </React.StrictMode>
  </>
)

reportWebVitals()
