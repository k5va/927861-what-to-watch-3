import {combineReducers} from "redux";
import {default as data} from "./data/data";
import {default as app} from "./app/app";
import {default as user} from "./user/user";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
  [NameSpace.USER]: user
});
