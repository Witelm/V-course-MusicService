import { useState } from 'react'
import PlayListItem from './PlayListItem'
import { track, content } from './Const'
import ButtonFilter from './Filter/ButtonFilter'

function CenterBlock() {
  const [activeButton, setActiveButton] = useState('')

  const toggleFilter = (filter) => {
    setActiveButton(activeButton === filter ? null : filter)
  }

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        ></input>
      </div>
      <h2 className="centerblock__h2">Треки</h2>

      <div className="centerblock__filter filter">
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
      </div>

      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          {Array.from({ length: 11 }).map((item, index) => (
            <PlayListItem {...track} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CenterBlock
