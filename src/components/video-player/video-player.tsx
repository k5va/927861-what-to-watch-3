import {withVideo} from "@hocs";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const VideoPlayer: React.FC<Props> = (props: Props) => (
  <div className="small-movie-card__image">
    <video width="280" height="175" ref={props.videoRef} />
  </div>
);

export default withVideo(VideoPlayer);
