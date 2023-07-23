import React, { useEffect, useState } from 'react'
import Main from './blocks/Main/Main'
import Bar from './blocks/Bar/Bar'
import Footer from './blocks/Footer/Footer'
import s from './GlobalStyle/Container.module.css'
import { ThemeContext, useThemeContext } from './blocks/context/Context'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const queryClient = new QueryClient()

function Container() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  const audioSrc = useSelector((state) => state.audio.src)
  const [stateBar, setBar] = useState()
  useEffect(() => {
    setBar(audioSrc)
    console.log('1', audioSrc)
  }, [audioSrc])

  const { theme } = useThemeContext()

  return (
    <QueryClientProvider client={queryClient}>
      <div className={s.wrapper}>
        <div
          className={s.container}
          style={{
            backgroundColor: theme.background,
            color: theme.color,
          }}
        >
          <Main isLoading={isLoading} />
          {!!stateBar ? <Bar audioSrc={stateBar} /> : null}
          {/* {isLoading ? null : <Bar />} */}
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default Container
