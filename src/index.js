import ReactDOM from "react-dom";
import {App} from "@components";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer} from "@store";
import createAPI from "@api";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const onUnauthorized = () => {
  console.log(`onUnauthorized`);
};

const api = createAPI(onUnauthorized);

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
