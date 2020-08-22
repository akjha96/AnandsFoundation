import actionType from "./actionType";
import * as authorAPI from "../../api/authorApi";

export const loadAuthorsSuccess = (authors) => {
  return {
    type: actionType.LOAD_AUTHORS_SUCCESS,
    authors,
  };
};

export const loadAuthors = () => {
  return function (dispatch) {
    return authorAPI
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
};
