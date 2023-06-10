import { useState } from 'react'
import { Drop } from './Drop'
import PlayListItem from './PlayListItem'
import { track } from './Const'

function CenterBlock() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibilityFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
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

        <div
          className={`dropdown filter__button button-author _btn-text ${
            visibleFilter === 'author' ? 'active' : ''
          }`}
          onClick={() => toggleVisibilityFilter('author')}
        >
          исполнителю {visibleFilter === 'author' && <Drop />}
        </div>

        <div
          className={`dropdown filter__button button-author _btn-text ${
            visibleFilter === 'year' ? 'active' : ''
          }`}
          onClick={() => toggleVisibilityFilter('year')}
        >
          году выпуска {visibleFilter === 'year' && <Drop />}
        </div>
        <div
          className={`dropdown filter__button button-author _btn-text ${
            visibleFilter === 'zhanr' ? 'active' : ''
          }`}
          onClick={() => toggleVisibilityFilter('zhanr')}
        >
          жанру {visibleFilter === 'zhanr' && <Drop />}
        </div>
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
