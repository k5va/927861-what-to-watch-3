import {withVideo} from "@hocs";

const VideoPlayer = (props) => props.children;

VideoPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired
  ]).isRequired
};

export default withVideo(VideoPlayer);
