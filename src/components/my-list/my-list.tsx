import {AppLogo, UserBlock, MoviesList} from "@components";
import {Movie} from "@types";

interface Props {
  movies: Array<Movie>;
}

const MyList: React.FC<Props> = (props: Props) => {
  const {movies} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <AppLogo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={movies} />
      </section>

      <footer className="page-footer">
        <AppLogo isLight={true} />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default MyList;
