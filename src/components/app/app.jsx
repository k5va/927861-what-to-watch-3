import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main, MovieDetails} from "../../components";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovie: null
    };
  }

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
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {promoMovie, movies} = this.props;
    const {selectedMovie} = this.state;

    if (selectedMovie) {
      return <MovieDetails movie={this.state.selectedMovie} />;
    }

    return (
      <Main
        promoMovie={promoMovie}
        movies={movies}
        onMovieTitleClick={(movie) => {
          this.setState({selectedMovie: movie});
        }}
      />
    );
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })).isRequired
};

export default App;
