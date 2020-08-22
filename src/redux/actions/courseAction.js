import actionType from "./actionType";
import * as courseAPI from "../../api/courseApi";
import { beginApiCall } from "./apiStatusActions";

export const loadCourseSuccess = (courses) => {
  return {
    type: actionType.LOAD_COURSES_SUCCESS,
    courses,
  };
};

export const createCourseSuccess = (course) => {
  return {
    type: actionType.CREATE_COURSE_SUCCESS,
    course,
  };
};

export const updateCourseSuccess = (course) => {
  return {
    type: actionType.UPDATE_COURSE_SUCCESS,
    course,
  };
};

// redux thunk functions
export const loadCourses = () => {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseAPI
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
};

// save course
export const saveCourse = (course) => {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return courseAPI
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
};
