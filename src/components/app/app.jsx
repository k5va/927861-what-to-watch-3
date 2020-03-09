import {Router, Route, Switch} from "react-router-dom";
import {Main, MovieDetails, VideoPlayerFull, SignIn, PrivateRoute} from "@components";
import {AppState} from "@consts";
import {history, AppRoute} from "@routes";

class App extends React.PureComponent {

  componentDidMount() {
    const {init} = this.props;
    init();
  }

  render() {
    const {login, appState} = this.props;

    switch (appState) {
      case AppState.PENDING:
      default:
        return null;
      case AppState.ERROR:
        return <h1>Something bad just happend!</h1>;
      case AppState.READY:
        return (
          <Router history={history}>
            <Switch>
              <Route exact path={AppRoute.MAIN}>
                <Main />
              </Route>
              <Route exact path={AppRoute.SIGN_IN}>
                <SignIn onSubmit={login} />
              </Route>
              <Route exact path={AppRoute.FILM}>
                <MovieDetails />
              </Route>
              <Route exact path={AppRoute.PLAYER}>
                <VideoPlayerFull />
              </Route>
              <PrivateRoute exact path={AppRoute.MY_LIST}
                render={() => <h1>My secret list!</h1>}
              />
            </Switch>
          </Router>
        );
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
