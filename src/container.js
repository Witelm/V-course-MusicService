import React, { useEffect, useState } from 'react'
import Main from './blocks/Main'
import Bar from './blocks/bar/Bar'
import Footer from './blocks/footer/Footer'
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`

function Container() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <StyledContainer>
      <Main isLoading={isLoading} />
      {isLoading ? null : <Bar />}
      <Footer />
    </StyledContainer>
  )
}

export default Container
