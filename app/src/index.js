import React from "react";
import ReactDOM from "react-dom";

// Root CSS
import "./css/normalize.css";
import "./css/index.css";

// Root App
import App from "./App";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Reducer
import { reducer } from "./services/reducer";

import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

window.scrollTo(0, 1);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
