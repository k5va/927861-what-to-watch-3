import {connect} from "react-redux";
import {getAuthorizationStatus} from "@store";
import {AuthorizationStatus} from "@consts";
import PrivateRoute from "./private-route";

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

