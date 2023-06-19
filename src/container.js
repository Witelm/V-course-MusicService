import React, { useEffect, useState } from 'react'
import Main from './blocks/Main'
import Bar from './blocks/Bar/Bar'
import Footer from './blocks/Footer/Footer'

function Container() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="container">
      <Main isLoading={isLoading} />
      {isLoading ? null : <Bar />}
      <Footer />
    </div>
  )
}

export default Container
