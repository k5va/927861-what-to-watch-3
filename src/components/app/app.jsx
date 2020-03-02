import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main, MovieDetails, VideoPlayerFull} from "@components";

class App extends React.PureComponent {

  render() {
    const {promoMovie} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-details">
            <MovieDetails movie={promoMovie}/>
          </Route>
          <Route exact path="/dev-player">
            <VideoPlayerFull
              isPlaying={false}
              title={`Die hard`}
              src={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
              duration={32}
              poster={`img/bg-the-grand-budapest-hotel.jpg`}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {promoMovie, selectedMovie} = this.props;

    if (selectedMovie) {
      return <MovieDetails movie={selectedMovie} />;
    }

    return (
      <Main
        promoMovie={promoMovie}
      />
    );
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  selectedMovie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  })
};

export default App;
