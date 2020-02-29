import {VideoPlayer} from "@components";
import {withActiveState} from "@hocs";

class MovieCard extends React.PureComponent {
  render() {
    const {movie, onClick, isActive} = this.props;
    const {title, cover, src} = movie;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={() => onClick(movie)}
        onMouseEnter={() => this._handleMouseEnter()}
        onMouseLeave={() => this._handleMouseLeave()}
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
  }

  // TODO: How to make this component functional with componentWillUnmount?
  componentWillUnmount() {
    this._clearTimer();
  }

  _handleMouseEnter() {
    const {onActiveChange} = this.props;

    this._timerId = setTimeout(() => {
      onActiveChange(true);
    }, MovieCard.VIDEO_PLAY_DELAY);
  }

  _handleMouseLeave() {
    const {onActiveChange} = this.props;

    this._clearTimer();
    onActiveChange(false);
  }

  _clearTimer() {
    if (this._timerId) {
      clearTimeout(this._timerId);
    }
  }
}

MovieCard.VIDEO_PLAY_DELAY = 1000;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired
};

export default withActiveState(MovieCard);
