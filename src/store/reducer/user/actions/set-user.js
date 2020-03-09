import ActionType from "./action-type";

const setUser = (user) => {
  return {
    type: ActionType.SET_USER,
    payload: user
  };
};

export default setUser;
