import { useState } from 'react'
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
  const [activeButton, setActiveButton] = useState('')
  const filterState = useSelector((state) => state.filter)
  const favorite = useSelector((state) => state.favorite.show)

  const { data, isLoading, isError } =
    favorite === false ? useGetAllTracksQuery() : useGetFavoriteAllTrackQuery()

  if (isLoading) {
    return <p>loading</p>
  }

  if (isError) {
    return <p>error</p>
  }

  const contentAuthor = data
    .map((track) => track.author)
    .filter((author) => author !== '-')
  const uniqAuthor = [...new Set(contentAuthor)]

  const contentYear = data.map((track) => track.release_date)
  // const sliceYear = contentYear.map((year) => year.slice(0, 5))

  // const trackFilterAuthor = (data) => {
  //   if (filterStateAuthor.length === 0) {
  //     return data
  //   }
  //   const filteredAuthor = []
  //   for (const filterItem of filterStateAuthor) {
  //     const temp = data.filter((track) => track.author === filterItem)
  //     filteredAuthor.push(...temp)
  //   }
  //   return filteredAuthor
  // }
  // const trackFilteredYear = (data) => {
  //   if (filterStateYear.length === 0) {
  //     return data
  //   }
  //   const filteredYear = []
  //   for (const filterItem of filterStateYear) {
  //     const temp = data.filter((track) => track.year === filterItem)
  //     filteredYear.push(...temp)
  //   }
  //   return filteredYear
  // }
  // const trackFilteredGenre = (data) => {
  //   if (filterStateGenre.length === 0) {
  //     return data
  //   }
  //   const filteredGenre = []
  //   for (const filterItem of filterStateYear) {
  //     const temp = data.filter((track) => track.genre === filterItem)
  //     filteredGenre.push(...temp)
  //   }
  //   return filteredGenre
  // }

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

  // const filteredContent =
  //   favorite === true ? null : applyFilters(data, filterState)

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
