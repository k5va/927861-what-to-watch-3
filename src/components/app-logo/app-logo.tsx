import {Link} from "react-router-dom";
import {AppRoute} from "@routes";

interface Props {
  isLight?: boolean;
}

const AppLogo: React.FunctionComponent<Props> = (props: Props) => {
  const {isLight = false} = props;

  return (
    <div className="logo">
      <Link to={AppRoute.MAIN} className={`logo__link ${isLight ? `logo__link--light` : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default AppLogo;
