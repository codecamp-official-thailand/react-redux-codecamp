import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware]1 dispatching", action);
      next(action);
      console.log("1--->", store.getState());
    };
  };
};

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
