import React, { useEffect, useState } from 'react'
import Main from './blocks/Main'
import Bar from './blocks/Bar'
import Footer from './blocks/Footer'

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
      <Bar />
      <Footer />
    </div>
  )
}

export default Container
