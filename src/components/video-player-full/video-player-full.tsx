import {withVideo} from "@hocs";
import {formatSeconds} from "@utils";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  title: string;
  time: number;
  progress: number;
  isPlaying: boolean;
  onPlay: () => void;
  onFullScreen: () => void;
  onExit: () => void;
}

const VideoPlayerFull: React.FC<Props> = (props: Props) => {
  const {videoRef, onPlay, onExit, onFullScreen, progress, time, title, isPlaying} = props;

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
          <div className="player__time-value">{formatSeconds(time)}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlay}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
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

export default withVideo(VideoPlayerFull);
