import * as React from "react";
import * as renderer from "react-test-renderer";
import {App} from "@components";
import {Provider} from "react-redux";
import {NameSpace} from "@store";
import configureStore from "redux-mock-store";
import {Genre, AppState, DEFAULT_SHOWN_MOVIES_NUMBER, AuthorizationStatus} from "@consts";
import thunk from "redux-thunk";

const movie = {
  id: `1`,
  title: `Die hard`,
  genre: `Drama`,
  year: 2019,
  duration: 123,
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by
      concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
      Gustave prides himself on providing first-class service to the hotel's guests, including satisfying
      the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies
      mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in
      her murder.`,
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  rating: {
    score: 8.9,
    count: 240
  },
  isFavorite: true
};

const mockApi = {
  loadMovies() {
    return Promise.resolve([movie]);
  },
  checkAuthorizationStatus() {
    return Promise.resolve({
      "id": 1,
      "email": `Oliver.conner@gmail.com`,
      "name": `Oliver.conner`,
      "avatar_url": `img/1.png`
    });
  }
};
const mockStore = configureStore([thunk.withExtraArgument(mockApi)]);
const store = mockStore({
  [NameSpace.DATA]: {
    promoMovieId: `1`,
    movies: [movie]
  },
  [NameSpace.APP]: {
    appState: AppState.READY,
    selectedGenre: Genre.ALL,
    shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null
  }
});

it(`App should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>,
        {
          createNodeMock: () => ({})
        }
    )
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
