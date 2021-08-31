import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyle } from "./globalStyle";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
