import {AppLogo, UserBlock, MoviesList} from "@components";

const MyList = (props) => {
  const {movies, onMovieCardClick} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <AppLogo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={movies} onMovieCardClick={onMovieCardClick} />
      </section>

      {/* TODO: make footer a component */}
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired
      })
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default MyList;
