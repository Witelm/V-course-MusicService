import { useState } from 'react'
import { content } from '../Const'
import ButtonFilter from '../Filter/ButtonFilter'
import { Search } from './Components/Search'
import { Content } from './Components/Content'
import s from './CenterBlock.module.css'
import { useThemeContext } from '../context/Context'
import { getContent } from '../../store/services/content'

function CenterBlock(props) {
  const [activeButton, setActiveButton] = useState('')

  const toggleFilter = (filter) => {
    setActiveButton(activeButton === filter ? null : filter)
  }

  const { theme } = useThemeContext()

  const contentArray = getContent()

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
          content={content}
        />
        <ButtonFilter
          title="году выпуска"
          isActive={activeButton === 'year'}
          onClick={() => toggleFilter('year')}
          hideButton={() => setActiveButton('')}
          content={content}
        />

        <ButtonFilter
          title="жанру"
          isActive={activeButton === 'genre'}
          onClick={() => toggleFilter('genre')}
          hideButton={() => setActiveButton('')}
          content={content}
        />
      </div>
      <Content {...props} />
    </div>
  )
}

export default CenterBlock
