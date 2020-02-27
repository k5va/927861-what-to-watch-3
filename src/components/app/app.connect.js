import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
