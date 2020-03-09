import {connect} from "react-redux";
import Main from "./main";
import {getPromoMovie} from "@store";
import {history, AppRoute} from "@routes";

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state)
});

const mapDispatchToProps = () => ({
  onPlayMovie() {
    history.push(AppRoute.PLAYER);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
