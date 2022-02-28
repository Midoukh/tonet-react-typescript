import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, Store, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";
import "./index.css";
import App from "./app";

declare global {
  interface window {
    __REDUX_DEVTOOLS_EXTENSION__COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store: Store = createStore(
  reducer,
  applyMiddleware(thunk),
  composeEnhancers()
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const rootElement = document.getElementById("app-root");

ReactDOM.render(
  <Provider store={store}>
    <App title="TONET" />
  </Provider>,
  rootElement
);
