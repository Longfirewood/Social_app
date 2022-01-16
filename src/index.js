import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

let renderEntireScreen = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireScreen(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireScreen(state);
});
