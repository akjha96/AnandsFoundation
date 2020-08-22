import actionType from "../actions/actionType";
import initialState from "./initialState";

const actionTypeEndsInSuccess = (type) => {
  return type.substring(type.length - 8) === "_SUCCESS";
};

const apiCallStatusReducer = (
  state = initialState.apiCallsInProgress,
  action
) => {
  if (action.type === actionType.BEGIN_API_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  } else {
    return state;
  }
};

export default apiCallStatusReducer;
