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
    const {login, appState, getMovie,
      onPlayMovie, onVideoPlayerExit, getSimilarMovies} = this.props;

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
              <Route exact path={AppRoute.MAIN} render={() => {
                return <Main onPlayMovie={onPlayMovie} />;
              }} />
              <Route exact path={AppRoute.SIGN_IN}>
                <SignIn onSubmit={login} />
              </Route>
              <Route exact path={AppRoute.FILM}
                render={(props) => {
                  const {id: movieId} = props.match.params;
                  const movie = getMovie(movieId);
                  return <MovieDetails
                    movie={movie}
                    similarMovies={getSimilarMovies(movie)}
                    onPlayMovie={() => onPlayMovie(movieId)}
                  />;
                }}
              />
              <Route exact path={AppRoute.PLAYER} render={(props) => {
                const {id: movieId} = props.match.params;
                const {title, duration, src, poster} = getMovie(movieId);
                return <VideoPlayerFull
                  title={title} duration={duration} src={src} poster={poster}
                  onExit={onVideoPlayerExit}
                />;
              }}/>
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
  getMovie: PropTypes.func.isRequired,
  onPlayMovie: PropTypes.func.isRequired,
  onVideoPlayerExit: PropTypes.func.isRequired,
  getSimilarMovies: PropTypes.func.isRequired
};

export default App;
