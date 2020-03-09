import {VideoPlayer} from "@components";
import {withActiveState, withTimer} from "@hocs";

const VIDEO_PLAY_DELAY = 1000;

const MovieCard = (props) => {
  const {movie, onClick, isActive, onActiveChange, setTimeout, clearTimeout} = props;
  const {title, cover, src} = movie;

  const _handleMouseEnter = () => setTimeout(() => onActiveChange(true), VIDEO_PLAY_DELAY);
  const _handleMouseLeave = () => {
    clearTimeout();
    onActiveChange(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onClick(movie)}
      onMouseEnter={() => _handleMouseEnter()}
      onMouseLeave={() => _handleMouseLeave()}
    >
      <VideoPlayer
        src={src}
        poster={cover}
        isPlaying={isActive}
      />
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => evt.preventDefault()}
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
    cover: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  setTimeout: PropTypes.func.isRequired,
  clearTimeout: PropTypes.func.isRequired
};

export default withTimer(withActiveState(MovieCard));
