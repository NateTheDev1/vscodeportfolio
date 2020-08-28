import React from "react";
import ReactDOM from "react-dom";

// Root CSS
import "./css/normalize.css";
import "./css/index.css";

// Root App
import App from "./App";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

// Reducer
import { reducer } from "./services/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
