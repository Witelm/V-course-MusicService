import { PlayListsSkeleton } from './Const'
import SkeletonItem from './SkeletonItem'

function Skeleton() {
  return (
    <main className="main">
      <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src="img/logo.png" alt="logo"></img>
        </div>
        <div className="nav__burger burger">
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </div>
      </nav>
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

          <div className="dropdown filter__button button-author _btn-text">
            исполнителю
          </div>

          <div className="dropdown filter__button button-author _btn-text">
            году выпуска
          </div>
          <div className="dropdown filter__button button-author _btn-text">
            жанру
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
              <SkeletonItem {...PlayListsSkeleton} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name"></p>
          <div className="sidebar__avatar"></div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="skeleton-sidebar"></div>
            <div className="skeleton-sidebar"></div>
            <div className="skeleton-sidebar"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Skeleton
