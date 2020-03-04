import ActionType from "./action-type";
import {DEFAULT_SHOWN_MOVIES_NUMBER} from "@consts";

export default () => ({
  type: ActionType.SHOW_MORE_MOVIES,
  payload: DEFAULT_SHOWN_MOVIES_NUMBER
});
