import AppActionCreator from "./app/actions/action-creator";
import DataActionCreator from "./data/actions/action-creator";

export default Object.assign({}, AppActionCreator, DataActionCreator);
