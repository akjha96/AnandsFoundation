import actionType from "./actionType";
import * as authorAPI from "../../api/authorApi";
import { beginApiCall } from "./apiStatusActions";

export const loadAuthorsSuccess = (authors) => {
  return {
    type: actionType.LOAD_AUTHORS_SUCCESS,
    authors,
  };
};

export const loadAuthors = () => {
  return function (dispatch) {
    dispatch(beginApiCall());
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
