import Nav from '../Nav/Nav'
import s from './NotFound.module.css'
import Bar from '../Bar/Bar'
import { Search } from '../Center/Components/Search'
import { Link, useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  const handleGoHome = () => {
    navigate('/', { replace: true })
  }
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <main className={s.main}>
          <Nav />
          <div className={s.main_search}>
            <Search />
            <div className={s.content}>
              <h1 className={s.h1}> 404</h1>
              <h2 className={s.h2}>Страница не найдена</h2>
              <h3 className={s.h3}>
                Возможно, она была удалена <br></br> или перенесена на другой
                адрес
              </h3>
              <button className={s.btn} onClick={handleGoHome}>
                Вернуться на главную
              </button>
            </div>
          </div>
        </main>
        <Bar />
      </div>
    </div>
  )
}
