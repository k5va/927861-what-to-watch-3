const MINUTES_IN_HOUR = 60;

const formatTime = (duration) => {
  const hours = Math.floor(duration / MINUTES_IN_HOUR);
  const minutes = duration % MINUTES_IN_HOUR;

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export default formatTime;
