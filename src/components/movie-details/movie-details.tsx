import {Tabs, Tab, MoviesList, UserBlock, AppLogo, MyListButton} from "@components";
import {convertScoreToText, formatMinutes, formatDate} from "@utils";
import {Link} from "react-router-dom";
import {AppRoute, createRoute, openVideoPlayer} from "@routes";
import {Movie} from "@types";

interface Props {
  movie: Movie;
  getSimilarMovies: (movie: Movie) => Array<Movie>;
  isAuthenticated: boolean;
}

const MovieDetails: React.FunctionComponent<Props> = (props: Props) => {
  const {movie, getSimilarMovies, isAuthenticated} = props;
  const {id, title, genre, year, poster, rating, backgroundImage,
    description, director, actors, comments, duration, isFavorite} = movie;
  const {score, count: ratingCount} = rating;

  return (
    <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <AppLogo />
          <UserBlock />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button"
                onClick={() => openVideoPlayer(id)}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <MyListButton movieId={id} isFavoriteMovie={isFavorite} />
              {
                isAuthenticated &&
                <Link to={createRoute(AppRoute.ADD_REVIEW, id)} className="btn movie-card__button">Add review</Link>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={poster}
              alt={title} width="218" height="327" />
          </div>

          <Tabs>
            <Tab name="Overview">
              <div className="movie-rating">
                <div className="movie-rating__score">{score}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{convertScoreToText(score)}</span>
                  <span className="movie-rating__count">{ratingCount} ratings</span>
                </p>
              </div>
              <div className="movie-card__text">
                <p>{description}</p>
                <p className="movie-card__director"><strong>Director: {director}</strong></p>
                <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)}</strong></p>
              </div>
            </Tab>
            <Tab name="Details">
              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      {actors.map((actor, i) => (
                        <span key={actor + i}>{i === actors.length - 1 ? actor : `${actor},`} <br/></span>)
                      )}
                    </span>
                  </p>
                </div>
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{formatMinutes(duration)}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{year}</span>
                  </p>
                </div>
              </div>
            </Tab>
            <Tab name="Reviews">
              <div className="movie-card__reviews movie-card__row">
                <div className="movie-card__reviews-col">
                  {comments.map((review) => (
                    <div className="review" key={review.id}>
                      <blockquote className="review__quote">
                        <p className="review__text">{review.text}</p>
                        <footer className="review__details">
                          <cite className="review__author">{review.author}</cite>
                          <time className="review__date" dateTime={review.date.toString()}>
                            {formatDate(review.date)}
                          </time>
                        </footer>
                      </blockquote>
                      <div className="review__rating">{review.rating}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <MoviesList movies={getSimilarMovies(movie)} />
      </section>
      <footer className="page-footer">
        <AppLogo isLight={true} />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default MovieDetails;
