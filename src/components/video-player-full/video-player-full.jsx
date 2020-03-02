import {withVideo} from "@hocs";

const VideoPlayerFull = (props) => {
  const {videoRef, onPlay, onExit, onFullScreen, progress, time, title} = props;

  return (
    <div className="player">
      <video className="player__video" ref={videoRef} />
      <button type="button" className="player__exit" onClick={onExit}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlay}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{title}</div>
          <button type="button" className="player__full-screen" onClick={onFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayerFull.propTypes = {
  videoRef: PropTypes.shape({current: PropTypes.instanceOf(HTMLMediaElement)}).isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired,
  onFullScreen: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired
};

export default withVideo(VideoPlayerFull);
