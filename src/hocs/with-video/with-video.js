export default (Component) => {
  class WithVideo extends React.Component {
    constructor(props) {
      super(props);
      const {isPlaying} = this.props;

      this.state = {
        time: 0,
        isLoading: true
      };

      this._isPlaying = isPlaying;
      this._videoRef = React.createRef();

      this._handlePlay = this._handlePlay.bind(this);
      this._handleFullScreen = this._handleFullScreen.bind(this);
    }

    componentDidMount() {
      const {src, poster} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;
      video.muted = true;
      video.oncanplaythrough = () => this.setState({isLoading: false});
      video.onplay = () => {
        this._isPlaying = true;
      };
      video.onpause = () => {
        this._isPlaying = false;
      };
      video.onload = () => {
        this._isPlaying = false;
      };
      video.ontimeupdate = () => this.setState({time: Math.floor(video.currentTime)});
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.onload = null;
      video.ontimeupdate = null;
      video.src = ``;
      video.poster = ``;
    }

    componentDidUpdate(prevProps) {
      if (prevProps.isPlaying !== this.props.isPlaying) {
        this._handlePlay();
      }
    }

    render() {
      const {time} = this.state;
      const {title, onExit} = this.props;

      return (
        <Component {...this.props}
          videoRef={this._videoRef}
          time={time}
          title={title}
          progress={this._calculateProgress()}
          onPlay={this._handlePlay}
          onExit={onExit}
          onFullScreen={this._handleFullScreen}
        />
      );
    }

    _handlePlay() {
      const video = this._videoRef.current;
      video[this._isPlaying ? `pause` : `play`]();
    }

    _handleFullScreen() {
      const video = this._videoRef.current;

      video.requestFullscreen();
    }

    _calculateProgress() {
      const {time} = this.state;
      const {duration} = this.props;

      return Math.floor(100 * time / duration);
    }
  }

  WithVideo.propTypes = {
    title: PropTypes.string,
    duration: PropTypes.number,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onExit: PropTypes.func
  };

  return WithVideo;
};