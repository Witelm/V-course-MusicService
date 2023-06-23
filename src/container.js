import React, { useEffect, useState } from 'react'
import Main from './blocks/Main/Main'
import Bar from './blocks/Bar/Bar'
import Footer from './blocks/Footer/Footer'
import s from './GlobalStyle/Container.module.css'

function Container() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Main isLoading={isLoading} />
        {isLoading ? null : <Bar />}
        <Footer />
      </div>
    </div>
  )
}

export default Container
