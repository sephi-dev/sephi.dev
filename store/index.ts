import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { rootSaga } from "./sagas";
import { State } from "./state";
import rootReducer from "./reducers";
import { MakeStoreOptions } from "next-redux-wrapper";

function configureStore(
  preloadedState: State,
  { isServer, req }: MakeStoreOptions
) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
}

export default configureStore;
