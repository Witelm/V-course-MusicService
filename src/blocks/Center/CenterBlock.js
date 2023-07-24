import { useState } from 'react'
import ButtonFilter from '../Filter/ButtonFilter'
import { Search } from './Components/Search'
import { Content } from './Components/Content'
import s from './CenterBlock.module.css'
import { useThemeContext } from '../context/Context'
import { useGetAllTracksQuery } from '../../store/services/content'
import { useSelector } from 'react-redux'

function CenterBlock(props) {
  const [activeButton, setActiveButton] = useState('')

  const { data, isLoading, isError } = useGetAllTracksQuery()
  if (isLoading) {
    return <p>loading</p>
  }

  if (isError) {
    return <p>error</p>
  }

  console.log(data)

  const contentAuthor = data
    .map((track) => track.author)
    .filter((author) => author !== '-')
  const uniqAuthor = [...new Set(contentAuthor)]

  const contentYear = data.map((track) => track.release_date)
  // const sliceYear = contentYear.map((year) => year.slice(0, 5))

  const toggleFilter = (filter) => {
    setActiveButton(activeButton === filter ? null : filter)
  }

  const contentGenre = data.map((track) => track.genre)
  const uniqGenre = [...new Set(contentGenre)]

  const filterObj = useSelector((state) => state.filter)
  console.log(filterObj)
  // const filteredData = data.filter(item => item.)

  const { theme } = useThemeContext()

  return (
    <div
      className={s.main}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <Search />
      <h2 className={s.h2}>Треки</h2>
      <div className={s.filter}>
        <div className={s.filter_title}>Искать по:</div>

        <ButtonFilter
          title="исполнителю"
          isActive={activeButton === 'author'}
          onClick={() => toggleFilter('author')}
          hideButton={() => setActiveButton('')}
          content={uniqAuthor}
          filter={activeButton}
        />
        <ButtonFilter
          title="году выпуска"
          isActive={activeButton === 'year'}
          onClick={() => toggleFilter('year')}
          hideButton={() => setActiveButton('')}
          content={contentYear}
          filter={activeButton}
        />

        <ButtonFilter
          title="жанру"
          isActive={activeButton === 'genre'}
          onClick={() => toggleFilter('genre')}
          hideButton={() => setActiveButton('')}
          content={uniqGenre}
          filter={activeButton}
        />
      </div>
      <Content data={data} />
    </div>
  )
}

export default CenterBlock
