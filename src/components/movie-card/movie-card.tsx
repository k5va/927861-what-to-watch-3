import {VideoPlayer} from "@components";
import {withActiveState, withTimer} from "@hocs";
import handleMovieCardClick from "./helpers/handle-movie-card-click";

const VIDEO_PLAY_DELAY = 1000;

const MovieCard = (props) => {
  const {movie, isActive, onActiveChange, setTimeout, clearTimeout} = props;
  const {id, title, cover, src} = movie;

  const _handleMouseEnter = () => setTimeout(() => onActiveChange(true), VIDEO_PLAY_DELAY);
  const _handleMouseLeave = () => {
    clearTimeout();
    onActiveChange(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => handleMovieCardClick(id)}
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
          href="#"
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  setTimeout: PropTypes.func.isRequired,
  clearTimeout: PropTypes.func.isRequired
};

export default withTimer(withActiveState(MovieCard));