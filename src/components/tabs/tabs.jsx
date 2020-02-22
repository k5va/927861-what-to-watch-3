import {withActiveTab} from "@hocs";

const Tabs = (props) => {
  const {children, tabs, activeTab, onActiveTabChange} = props;
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) => (
            <li
              key={tab + i}
              className={`movie-nav__item ${i === activeTab ? `movie-nav__item--active` : ``}`}
              onClick={(evt) => {
                evt.preventDefault();
                onActiveTabChange(i);
              }}
            >
              <a href="#" className="movie-nav__link">{tab}</a>
            </li>
          ))}
        </ul>
      </nav>
      {children[activeTab]}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.number.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired
  ]).isRequired
};


export default withActiveTab(Tabs);
