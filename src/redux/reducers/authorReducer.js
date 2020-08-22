import actionType from "../actions/actionType";
import initialState from "./initialState";

const authorReducer = (state = initialState.authors, action) => {
  switch (action.type) {
    case actionType.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};

export default authorReducer;
