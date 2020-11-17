import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducer";
import sagas from "./sagas";

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
const enhancers = [applyMiddleware(...middleware)];

createStore(reducers, undefined, compose(...enhancers));

const store = createStore(reducers, undefined, compose(...enhancers));

const configureStore = () => {
  return { store };
};

sagaMiddleware.run(sagas);

export default configureStore;
