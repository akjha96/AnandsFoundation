import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const configureStore = (initialState) => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add  support for redux dev tools
  return createStore(
    rootReducer, //
    initialState,
    composeEnhancer(applyMiddleware(reduxImmutableStateInvariant()))
  );
};

export default configureStore;
