import actionType from "./actionType";

export const createCourse = (course) => {
  return {
    type: actionType.CREATE_COURSE,
    course,
  };
};
