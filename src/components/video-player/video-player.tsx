import * as React from "react";
import {withVideo} from "@hocs";

interface Props {
  videoRef: React.RefObject<HTMLMediaElement>
};

const VideoPlayer = (props) => (
  <div className="small-movie-card__image">
    <video width="280" height="175" ref={props.videoRef} />
  </div>
);

export default withVideo(VideoPlayer);
