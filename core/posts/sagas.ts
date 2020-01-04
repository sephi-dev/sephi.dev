import { call, put, takeLatest } from "redux-saga/effects";
import { Actions, Events } from "./actions";
import { getPosts, getPostBySlug } from "@core/api";

function* fetchPosts() {
  try {
    const posts = yield call(getPosts);
    // After the api call is done, dispatch an action with the payload
    yield put(Actions.setPosts(posts));
  } catch (e) {
    console.error(e);
  }
}

function* fetchPostBySlug(postSlug: string, id: string) {
  try {
    const post = yield call(() => getPostBySlug(postSlug as string, id));
    yield put(Actions.setPost(post));
  } catch (e) {
    console.error(e);
  }
}

// all posts sagas in one place
// Dispatching an event will fire an Action.
export function* sagas(): Generator {
  yield takeLatest(Events.getPosts, fetchPosts);
  yield takeLatest(Events.getPostBySlug, () => fetchPostBySlug);
}
