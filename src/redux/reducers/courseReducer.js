import actionType from "../actions/actionType";
import initialState from "./initialState";

const courseReducer = (state = initialState.courses, action) => {
  switch (action.type) {
    case actionType.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case actionType.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case actionType.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
};

export default courseReducer;
