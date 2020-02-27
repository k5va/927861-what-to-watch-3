const ShowMore = (props) => {
  const {onClick, isVisible} = props;
  return (
    <div className="catalog__more">
      {
        isVisible &&
        <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
      }
    </div>
  );
};

export default ShowMore;
