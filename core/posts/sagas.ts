import { call, put, takeEvery } from "redux-saga/effects";
import { Actions, Events } from "./actions";
import { getPosts } from "@core/api";

function* fetchPosts() {
  try {
    const posts = yield call(getPosts);
    // After the api call is done, dispatch an action with the payload
    yield put(Actions.setPosts(posts));
  } catch (e) {
    console.error(e);
  }
}

// all posts sagas in one place
// Dispatching an event will fire an Action.
export function* sagas(): Generator {
  yield takeEvery(Events.getPosts, fetchPosts);
}
