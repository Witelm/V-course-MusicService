import { useState } from 'react'
import PlayListItem from './PlayListItem'
import { track, content } from '../Const'
import ButtonFilter from '../filter/ButtonFilter'

import * as S from './StyleCenterBlock'

import CenterContent from './CenterContent'

function CenterBlock() {
  const [activeButton, setActiveButton] = useState('')

  const toggleFilter = (filter) => {
    setActiveButton(activeButton === filter ? null : filter)
  }

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        ></input>
      </S.CenterblockSearch>
      <S.CenterblockH2>Треки</S.CenterblockH2>

      <S.CenterblockFilter>
        <div className="filter__title">Искать по:</div>

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
      </S.CenterblockFilter>

      <S.CenterblockContent>
        <CenterContent />
        <div className="content__playlist playlist">
          {Array.from({ length: 11 }).map((item, index) => (
            <PlayListItem {...track} key={index} />
          ))}
        </div>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default CenterBlock
