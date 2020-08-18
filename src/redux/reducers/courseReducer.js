import actionType from "../actions/actionType";

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
};

export default courseReducer;
