import reducer from "./app";
import ActionCreator from "./actions/action-creator";
import {Genre, AppState, DEFAULT_SHOWN_MOVIES_NUMBER} from "@consts";

it(`Reducer should change genre`, () => {
  const initialState = {
    appState: AppState.READY,
    selectedGenre: Genre.ALL,
    shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER,
  };
  const targetState = {
    appState: AppState.READY,
    selectedGenre: `Comedy`,
    shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER
  };

  expect(reducer(initialState, ActionCreator.changeGenre(`Comedy`)))
    .toEqual(targetState);
});

it(`Reducer should change App state`, () => {
  const initialState = {
    appState: AppState.PENDING,
    selectedGenre: Genre.ALL,
    shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER
  };
  const targetState = {
    appState: AppState.READY,
    selectedGenre: Genre.ALL,
    shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER
  };

  expect(reducer(initialState, ActionCreator.changeAppState(AppState.READY)))
    .toEqual(targetState);
});

it(`Reducer should show update more movies`, () => {
  const initialState = {
    appState: AppState.READY,
    selectedGenre: Genre.ALL,
    shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER
  };
  const targetState = {
    appState: AppState.READY,
    selectedGenre: Genre.ALL,
    shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER * 2
  };

  expect(reducer(initialState, ActionCreator.showMoreMovies(DEFAULT_SHOWN_MOVIES_NUMBER)))
    .toEqual(targetState);
});

it(`Reducer should reset show more movies`, () => {
  const initialState = {
    appState: AppState.READY,
    selectedGenre: Genre.ALL,
    shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER * 2
  };
  const targetState = {
    appState: AppState.READY,
    selectedGenre: Genre.ALL,
    shownMoviesNumber: DEFAULT_SHOWN_MOVIES_NUMBER
  };

  expect(reducer(initialState, ActionCreator.resetShowMoreMovies()))
    .toEqual(targetState);
});
