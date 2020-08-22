import actionType from "./actionType";

export const beginApiCall = () => {
  return {
    type: actionType.BEGIN_API_CALL,
  };
};
