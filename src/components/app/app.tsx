import {Router, Route, Switch, Redirect} from "react-router-dom";
import {Main, MovieDetails, VideoPlayerFull, SignIn,
  PrivateRoute, AddReview, MyList} from "@components";
import {AppState} from "@consts";
import {history, AppRoute, goBack} from "@routes";
import {AuthData, Movie} from "@types";

interface Props {
  init: () => void;
  login: (AuthData: AuthData) => void;
  appState: string;
  getMovie: (id: string) => Movie;
  isAuthenticated: boolean;
}

const App: React.FunctionComponent<Props> = (props: Props) => {
  const {login, appState, getMovie, isAuthenticated, init} = props;

  React.useEffect(() => init(), []);

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
              render={({match}) => {
                const {id: movieId} = match.params;
                const movie = getMovie(movieId);
                return <MovieDetails movie={movie} />;
              }}
            />

            <Route exact path={AppRoute.PLAYER} render={({match}) => {
              const {id: movieId} = match.params;
              const {title, duration, src, poster} = getMovie(movieId);
              return <VideoPlayerFull
                title={title} duration={duration} src={src} poster={poster}
                onExit={goBack}
              />;
            }}/>

            <PrivateRoute exact path={AppRoute.ADD_REVIEW}
              render={({match}) => {
                const {id: movieId} = match.params;
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
};

export default App;
