import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main, MovieDetails, VideoPlayerFull, SignIn} from "@components";
import {AppState} from "@consts";

class App extends React.PureComponent {

  componentDidMount() {
    const {init} = this.props;
    init();
  }

  render() {
    const {login} = this.props;

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
          <Route exact path="/dev-auth">
            <SignIn onSubmit={login} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {appState, login} = this.props;

    switch (appState) {
      case AppState.PENDING:
        return null;
      case AppState.ERROR:
        return <h1>Something bad just happend!</h1>;
      case AppState.MOVIE_DETAILS:
        return <MovieDetails />;
      case AppState.VIDEO_PLAYER:
        return <VideoPlayerFull />;
      case AppState.SIGN_IN:
        return <SignIn onSubmit={login} />;
      case AppState.MAIN:
      default:
        return <Main />;
    }
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  appState: PropTypes.string.isRequired,
  selectedMovie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  })
};

export default App;
