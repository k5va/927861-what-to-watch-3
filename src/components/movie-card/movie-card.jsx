const MovieCard = ({movie, onHover, onClick}) => {
  const {title, cover} = movie;
  return (
    <article
      key={title}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onHover(movie)}
    >
      <div className="small-movie-card__image" onClick={() => onClick(movie)}>
        <img src={cover} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => {
            evt.preventDefault();
            onClick(movie);
          }}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired
};

export default MovieCard;
