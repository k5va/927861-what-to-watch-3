import {connect} from "react-redux";
import {getAuthorizationStatus} from "@store";
import {AuthorizationStatus} from "@consts";
import MovieDetails from "./movie-details";

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

