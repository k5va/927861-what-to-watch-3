import * as React from "react";
import {VideoPlayer} from "@components";
import {withActiveState, withTimer} from "@hocs";
import handleMovieCardClick from "./helpers/handle-movie-card-click";
import {Movie} from "@types";

const VIDEO_PLAY_DELAY = 1000;

interface Props {
  movie: Movie,
  isActive: boolean,
  onActiveChange: (isActive: boolean) => void,
  setTimeout: (callback: () => void, time: number) => void,
  clearTimeout: () => void
};

const MovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {movie, isActive, onActiveChange, setTimeout, clearTimeout} = props;
  const {id, title, cover, src} = movie;

  const _handleMouseEnter = () => setTimeout(() => onActiveChange(true), VIDEO_PLAY_DELAY);
  const _handleMouseLeave = () => {
    clearTimeout();
    onActiveChange(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => handleMovieCardClick(id)}
      onMouseEnter={() => _handleMouseEnter()}
      onMouseLeave={() => _handleMouseLeave()}
    >
      <VideoPlayer
        src={src}
        poster={cover}
        isPlaying={isActive}
      />
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="#"
          onClick={(evt) => evt.preventDefault()}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

export default withTimer(withActiveState(MovieCard));
