import {Router, Route, Switch, Redirect} from "react-router-dom";
import {Main, MovieDetails, VideoPlayerFull, SignIn,
  PrivateRoute, AddReview, MyList} from "@components";
import {AppState} from "@consts";
import {history, AppRoute, goBack} from "@routes";

class App extends React.PureComponent {

  componentDidMount() {
    const {init} = this.props;
    init();
  }

  render() {
    const {login, appState, getMovie, isAuthenticated} = this.props;

    switch (appState) {
      case AppState.PENDING:
      default:
        return null;
      case AppState.ERROR:
      case AppState.READY:
        return (
          <Router history={history}>
            <Switch>

              <Route exact path={AppRoute.MAIN} render={() => {
                return <Main />;
              }} />

              <Route exact path={AppRoute.SIGN_IN} render={() => {
                return isAuthenticated ? <Redirect to={AppRoute.MAIN} /> : <SignIn onSubmit={login} />;
              }} />

              <Route exact path={AppRoute.FILM}
                render={(props) => {
                  const {id: movieId} = props.match.params;
                  const movie = getMovie(movieId);
                  return <MovieDetails movie={movie} />;
                }}
              />

              <Route exact path={AppRoute.PLAYER} render={(props) => {
                const {id: movieId} = props.match.params;
                const {title, duration, src, poster} = getMovie(movieId);
                return <VideoPlayerFull
                  title={title} duration={duration} src={src} poster={poster}
                  onExit={goBack}
                />;
              }}/>

              <PrivateRoute exact path={AppRoute.ADD_REVIEW}
                render={(props) => {
                  const {id: movieId} = props.match.params;
                  return <AddReview movie={getMovie(movieId)} />;
                }}
              />

              <PrivateRoute exact path={AppRoute.MY_LIST}
                render={() => {
                  return <MyList />;
                }}
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
  getMovie: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default App;
