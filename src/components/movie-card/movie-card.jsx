const MovieCard = ({movie, onHover}) => {
  const {title, src} = movie;
  return (
    <article
      key={title}
      className="small-movie-card catalog__movies-card"
      onHover={() => onHover(movie)}
    >
      <div className="small-movie-card__image">
        <img src={src} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  onHover: PropTypes.func.isRequired
};

export default MovieCard;
