import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "@components";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer} from "@store";
import Api from "./api/api";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const api = new Api();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
