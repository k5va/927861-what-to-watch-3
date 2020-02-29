import {withActiveItem} from "@hocs";

const Tabs = (props) => {
  const {children, activeItem, onActiveItemChange} = props;
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {children.map((tab, i) => (
            <li
              key={tab.props.name + i}
              className={`movie-nav__item ${i === activeItem ? `movie-nav__item--active` : ``}`}
              onClick={(evt) => {
                evt.preventDefault();
                onActiveItemChange(i);
              }}
            >
              <a href="#" className="movie-nav__link">{tab.props.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      {children[activeItem]}
    </div>
  );
};

Tabs.propTypes = {
  activeItem: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired
  ]).isRequired
};


export default withActiveItem(Tabs);
