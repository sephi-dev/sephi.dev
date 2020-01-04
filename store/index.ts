import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { rootSaga } from "./sagas";
import { State } from "./state";
import rootReducer from "./reducers";
import { MakeStoreOptions } from "next-redux-wrapper";

const sagaMiddleware = createSagaMiddleware();

function configureStore(
  preloadedState: State,
  { isServer, req }: MakeStoreOptions
) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
}

export default configureStore;
