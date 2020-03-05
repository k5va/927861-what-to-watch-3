import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main, MovieDetails, VideoPlayerFull} from "@components";
import {AppState} from "@consts";

class App extends React.PureComponent {

  componentDidMount() {
    const {init} = this.props;
    init();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-details">
            <MovieDetails />
          </Route>
          <Route exact path="/dev-player">
            <VideoPlayerFull />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {appState} = this.props;

    switch (appState) {
      case AppState.MOVIE_DETAILS:
        return <MovieDetails />;
      case AppState.VIDEO_PLAYER:
        return <VideoPlayerFull />;
      case AppState.MAIN:
      default:
        return <Main />;
    }
  }
}

App.propTypes = {
  appState: PropTypes.string.isRequired,
  selectedMovie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  })
};

export default App;
