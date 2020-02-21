import {VideoPlayer} from "@components";

const movie = {
  cover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`VideoPlayer should have two states: Playing, Paused`, () => {
  const wrapperPlaying = mount(
      <VideoPlayer src={movie.src} poster={movie.cover} isPlaying={true} />
  );
  expect(wrapperPlaying.state().isPlaying).toBe(true);

  const wrapperPaused = mount(
      <VideoPlayer src={movie.src} poster={movie.cover} isPlaying={false} />
  );
  expect(wrapperPaused.state().isPlaying).toBe(false);
});
