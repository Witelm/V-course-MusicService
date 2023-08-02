import { useEffect, useState } from 'react'
import { useThemeContext } from '../context/Context'
import {
  useGetAllTracksQuery,
  useGetFavoriteAllTrackQuery,
} from '../../store/services/content'
import ButtonFilter from '../Filter/ButtonFilter'
import { Search } from './Components/Search'
import { Content } from './Components/Content'
import s from './CenterBlock.module.css'
import { useSelector } from 'react-redux'

function CenterBlock(props) {
  const { dataAll, isLoading, isError } = useGetAllTracksQuery()
  const { dataFavorite, isLoadingFavorite, isErrorFavorite } =
    useGetFavoriteAllTrackQuery()
  const filterState = useSelector((state) => state.filter)
  const favorite = useSelector((state) => state.favorite.show)
  const [activeButton, setActiveButton] = useState('')
  const [data, setData] = useState()

  let loadingMessage = null
  if (isLoading || isLoadingFavorite) {
    return (loadingMessage = <p>loading</p>)
  }
  let errorMessage = null
  if (isError || isErrorFavorite) {
    return (errorMessage = <p>Error</p>)
  }

  useEffect(() => {
    favorite ? setData(dataAll) : setData(dataFavorite)
  }, [])

  const contentAuthor = data
    .map((track) => track.author)
    .filter((author) => author !== '-')
  const uniqAuthor = [...new Set(contentAuthor)]

  const contentYear = data.map((track) => track.release_date)

  const applyFilters = (tracks, filterObj) => {
    const { author, year, genre } = filterObj
    return tracks.filter((track) => {
      return (
        (author.length === 0 || author.includes(track.author)) &&
        (year.length === 0 || year.includes(track.release_date)) &&
        (genre.length === 0 || genre.includes(track.genre))
      )
    })
  }

  const filteredContent = applyFilters(data, filterState)

  const toggleFilter = (filter) => {
    setActiveButton(activeButton === filter ? null : filter)
  }

  const contentGenre = data.map((track) => track.genre)
  const uniqGenre = [...new Set(contentGenre)]

  const { theme } = useThemeContext()

  return (
    <div
      className={s.main}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      {loadingMessage}
      {errorMessage}
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
      <Content data={filteredContent} />
    </div>
  )
}

export default CenterBlock
