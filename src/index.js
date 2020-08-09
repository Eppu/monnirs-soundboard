import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Reducer from "./reducer";
import { Soundboard } from "./components/soundboard";

import ReactGA from 'react-ga';

const store = createStore(
  Reducer,
  applyMiddleware(thunk)
);
store.subscribe(() => {
  let state = store.getState();
  document.body.style.backgroundColor = state.config.colors.background;
  document.body.style.color = state.config.colors.text;
});

function initializeReactGA() {
  ReactGA.initialize('UA-175028023-1');
  ReactGA.pageview('/');
}

document.addEventListener("DOMContentLoaded", () => {
  initializeReactGA();
  ReactDOM.render(
    <Provider store={store}>
      
      <Soundboard />
    </Provider>,
    document.getElementById("root")
  );
});
