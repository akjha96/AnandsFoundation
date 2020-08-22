import actionType from "./actionType";
import * as courseAPI from "../../api/courseApi";

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
  return function (dispatch, getState) {
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
