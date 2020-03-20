const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

const addStartingZero = (value) => value < 10 ? `0${value}` : `${value}`;

const formatSeconds = (duration) => {
  const hours = Math.floor(duration / (MINUTES_IN_HOUR * SECONDS_IN_MINUTE));
  const minutes = Math.floor(duration / MINUTES_IN_HOUR);
  const seconds = duration % SECONDS_IN_MINUTE;

  return `${addStartingZero(hours)}:${addStartingZero(minutes)}:${addStartingZero(seconds)}`;
};

export default formatSeconds;
