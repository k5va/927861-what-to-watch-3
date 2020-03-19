import * as React from "react";
import {MovieCard} from "@components";
import {Movie} from "@types";

interface Props {
  movies: Array<Movie>;
}

const MoviesList: React.FunctionComponent<Props> = (props: Props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => <MovieCard
        key={movie.id}
        movie={movie}
      />)}
    </div>
  );
};

export default MoviesList;
