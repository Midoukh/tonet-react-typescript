import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";
import "./index.css";
import App from "./app";

const store: Store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("app-root");

ReactDOM.render(
  <Provider store={store}>
    <App title="TONET" />
  </Provider>,
  rootElement
);
