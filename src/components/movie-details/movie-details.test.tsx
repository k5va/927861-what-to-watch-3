import * as renderer from "react-test-renderer";
import {MovieDetails} from "@components";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "@store";
import {Router} from "react-router-dom";
import {history} from "@routes";

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
  isFavorite: true,
  comments: [
    {
      id: `1`,
      text: `Bla Bla Bla`,
      author: `John Doe`,
      date: new Date(),
      rating: 9.0
    },
    {
      id: `2`,
      text: `Foo Foo Foo`,
      author: `Duffy Duck`,
      date: new Date(),
      rating: 2.0
    },
    {
      id: `3`,
      text: `Bark Bark Bark`,
      author: `Pluto`,
      date: new Date(),
      rating: 5.0
    },
  ]
};

const store = createStore(reducer);

it(`MovieDetails should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieDetails movie={movie} />
          </Router>
        </Provider>,
        {
          createNodeMock: () => ({})
        })
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
