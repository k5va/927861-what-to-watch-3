import {withVideo} from "@hocs";

const VideoPlayer = (props) => (
  <div className="small-movie-card__image">
    <video width="280" height="175" ref={props.videoRef} />
  </div>
);

VideoPlayer.propTypes = {

};

export default withVideo(VideoPlayer);
