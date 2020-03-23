import {withActiveItem} from "@hocs";

interface Props {
  children: Array<React.ReactNode & {props: {name: string}}>;
  activeItem: number;
  onActiveItemChange: (item: number) => void;
}

const Tabs: React.FC<Props> = (props: Props) => {
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

export default withActiveItem(Tabs);
