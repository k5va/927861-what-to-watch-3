import * as React from "react";

interface Props {
  isVisible: boolean,
  onClick: () => void
};

const ShowMore: React.FunctionComponent<Props> = (props: Props) => {
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
