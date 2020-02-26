import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main, MovieDetails} from "@components";

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
