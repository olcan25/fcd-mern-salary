import reducers from "./index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default function configureStore() {
  //const store = createStore(reducers, applyMiddleware(thunk, logger));
  const store = createStore(reducers, applyMiddleware(thunk));
    // store.subscribe(()=>console.log(store.getState()));
  return store;
}
