const MyListButton = ({isAuthenticated, movieId, isFavoriteMovie, onClick}) => {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => onClick(movieId, isFavoriteMovie)}
    >
      {isFavoriteMovie ||
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      }
      {isFavoriteMovie &&
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      }
      <span>My list</span>
    </button>
  );
};

export default MyListButton;
