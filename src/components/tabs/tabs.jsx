const DEFAULT_ACTIVE_TAB = 0;

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: DEFAULT_ACTIVE_TAB
    };
  }

  render() {
    const {children, tabs} = this.props;
    const {activeTab} = this.state;

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
                  this.setState({activeTab: i});
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
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};


export default Tabs;
