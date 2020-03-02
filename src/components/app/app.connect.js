import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = ({gameScreen, selectedMovie}) => ({
  gameScreen,
  selectedMovie
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
