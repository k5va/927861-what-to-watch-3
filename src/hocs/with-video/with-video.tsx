interface Props {
    title?: string;
    duration?: number;
    src: string;
    poster: string;
    onExit?: () => void;
    isPlaying: boolean;
}

interface State {
  time: number;
  isLoading: boolean;
  isPlaying: boolean;
}

export default (Component) => {
  class WithVideo extends React.PureComponent<Props, State> {

    private _videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      const {isPlaying = true} = this.props;

      this.state = {
        time: 0,
        isLoading: true,
        isPlaying
      };

      this._videoRef = React.createRef();

      this._handlePlay = this._handlePlay.bind(this);
      this._handleFullScreen = this._handleFullScreen.bind(this);
    }

    componentDidMount() {
      const {src, poster, isPlaying} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;
      video.muted = true;
      video.oncanplaythrough = () => this.setState({isLoading: false});
      video.onplay = () => {
        this.setState({isPlaying: true});
      };
      video.onpause = () => {
        this.setState({isPlaying: false});
      };
      video.onload = () => {
        this.setState({isPlaying: false});
      };
      video.ontimeupdate = () => this.setState({time: Math.floor(video.currentTime)});

      if (isPlaying) {
        video.play();
      }
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
      const {isPlaying} = this.props;

      if (prevProps.isPlaying !== isPlaying) {
        const video = this._videoRef.current;
        video[isPlaying ? `play` : `load`]();
      }
    }

    render() {
      const {time, isPlaying} = this.state;
      const {title, onExit} = this.props;

      return (
        <Component {...this.props}
          videoRef={this._videoRef}
          time={time}
          title={title}
          progress={this._calculateProgress()}
          isPlaying={isPlaying}
          onPlay={this._handlePlay}
          onExit={onExit}
          onFullScreen={this._handleFullScreen}
        />
      );
    }

    _handlePlay() {
      const video = this._videoRef.current;
      video[this.state.isPlaying ? `pause` : `play`]();
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

  return WithVideo;
};
