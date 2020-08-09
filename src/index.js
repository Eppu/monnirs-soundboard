import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Reducer from "./reducer";
import { Soundboard } from "./components/soundboard";

const store = createStore(
  Reducer,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  let state = store.getState();
  document.body.style.backgroundColor = state.config.colors.background;
  document.body.style.color = state.config.colors.text;
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <h1 className="title">MonniRS soundboard</h1>
      <Soundboard />
    </Provider>,
    document.getElementById("root")
  );
});
