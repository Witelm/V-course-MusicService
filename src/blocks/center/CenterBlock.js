import { useState } from 'react'

import { content } from '../Const'
import ButtonFilter from '../filter/ButtonFilter'

import * as S from './StyleCenterBlock'

import CenterContent from './CenterContent'

function CenterBlock(props) {
  const [activeButton, setActiveButton] = useState('')

  const toggleFilter = (filter) => {
    setActiveButton(activeButton === filter ? null : filter)
  }

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SerchText
          type="search"
          placeholder="Поиск"
          name="search"
        ></S.SerchText>
      </S.CenterblockSearch>
      <S.CenterblockH2>Треки</S.CenterblockH2>

      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>

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
        <S.ContentPlaylist>
          {Array.from({ length: 11 }).map((item, index) => (
            <props.array {...props.track} key={index} />
          ))}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default CenterBlock
