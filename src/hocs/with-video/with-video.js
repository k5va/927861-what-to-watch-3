export default (Component) => {
  class WithVideo extends React.PureComponent {
    constructor(props) {
      super(props);
      const {isPlaying} = this.props;

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying
      };

      this._videoRef = React.createRef();
    }

    componentDidMount() {
      const {src, poster} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;
      video.muted = true;
      video.oncanplaythrough = () => this.setState({isLoading: false});
      video.onplay = () => this.setState({isPlaying: true});
      video.onpause = () => this.setState({isPlaying: false});
      video.onload = () => this.setState({isPlaying: false});
      video.ontimeupdate = () => this.setState({progress: Math.floor(video.currentTime)});
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

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.props;

      video[isPlaying ? `play` : `load`]();
    }

    render() {
      return (
        <Component {...this.props}>
          <video width="280" height="175" ref={this._videoRef} />
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired
  };

  return WithVideo;
};
