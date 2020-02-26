import {VideoPlayer} from "@components";

class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._isHovered = false;
  }

  render() {
    const {movie, onHover, onClick} = this.props;
    const {title, cover, src} = movie;
    const {isPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => onHover(movie)}
        onClick={() => onClick(movie)}
        onMouseEnter={() => this._handleMouseEnter()}
        onMouseLeave={() => this._handleMouseLeave()}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={src}
            poster={cover}
            isPlaying={isPlaying}
          />
        </div>
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

  _handleMouseEnter() {
    this._isHovered = true;
    setTimeout(() => {
      if (this._isHovered) {
        this.setState({isPlaying: true});
      }
    }, MovieCard.VIDEO_PLAY_DELAY);
  }

  _handleMouseLeave() {
    this._isHovered = false;
    this.setState({isPlaying: false});
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
  onHover: PropTypes.func.isRequired
};

export default MovieCard;
