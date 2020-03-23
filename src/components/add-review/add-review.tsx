import {AppLogo, UserBlock} from "@components";
import {Link} from "react-router-dom";
import {AppRoute, createRoute} from "@routes";
import {isFormValid, isReviewTextValid} from "./helpers";
import {ReviewTextSize} from "@consts";
import {Movie} from "@types";

interface Props {
  movie: Movie;
  addReview: (rating: number, comment: string, movieId: string) => void;
  isError: boolean;
}

const AddReview: React.FunctionComponent<Props> = (props: Props) => {
  const {movie, addReview, isError} = props;
  const {id, title, backgroundImage, poster} = movie;
  const reviewForm: React.RefObject<HTMLFormElement> = React.createRef();
  const submitButton: React.RefObject<HTMLButtonElement> = React.createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(reviewForm.current);
    if (isFormValid(formData)) {
      addReview(+formData.get(`rating`), `` + formData.get(`review-text`), id);
    }
  };

  const handleReviewTextChange = (evt) => {
    submitButton.current.disabled = !isReviewTextValid(evt.target.value);
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <AppLogo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={createRoute(AppRoute.FILM, id)} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        {isError && <p>Something bad happened. Please try again!</p>}
        <form action="#" className="add-review__form" ref={reviewForm} onSubmit={handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
                defaultChecked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea" name="review-text"
              id="review-text" placeholder="Review text"
              required minLength={ReviewTextSize.MIN} maxLength={ReviewTextSize.MAX}
              onChange={handleReviewTextChange}
            ></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={true}
                ref={submitButton}
              >Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

export default AddReview;
