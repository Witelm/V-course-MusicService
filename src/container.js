import React from 'react'
import Main from './bricks/main'
import Bar from './bricks/bar'

function Container() {
  return (
    <div className="container">
      <main className="main">
        <Main />
        <Bar />
      </main>

      <footer></footer>
    </div>
  )
}

export default Container
