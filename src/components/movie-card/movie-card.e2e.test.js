import {MovieCard} from "@components";
import {generateId} from "@utils";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, ActionCreator} from "@store";

const HANDLE_HOVER_CALL_COUNT = 1;
const HANDLE_CLICK_CALL_COUNT = 1;

const movie = {
  id: generateId(),
  title: `Die hard`,
  genre: `Drama`,
  year: 2019,
  duration: 123,
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
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
  }
};

const mockEvent = {
  preventDefault() {},
};

const store = createStore(reducer);

it(`Movie click passes movie object to callback`, () => {
  ActionCreator.selectMovie = jest.fn(ActionCreator.selectMovie);

  const screen = mount(
      <Provider store={store}>
        <MovieCard movie={movie} />
      </Provider>
  );

  const movieImage = screen.find(`.small-movie-card`);
  movieImage.simulate(`click`, mockEvent);

  expect(ActionCreator.selectMovie).toHaveBeenCalledTimes(HANDLE_CLICK_CALL_COUNT);
  expect(ActionCreator.selectMovie.mock.calls[0][0]).toMatchObject(movie);
});
