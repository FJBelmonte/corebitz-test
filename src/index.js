import "./assets/fonts/Montserrat-Regular.ttf";

import { applyMiddleware, compose, createStore } from "redux";

import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector("#root")
);
