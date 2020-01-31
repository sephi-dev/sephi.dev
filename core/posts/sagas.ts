import { call, put, takeLatest } from "redux-saga/effects";
import { Actions, Events } from "./actions";
import { getPosts, getPostBySlug } from "@core/api";
import { SagaIterator } from "redux-saga";
import { BaseAction } from "@models/actions";

function* fetchPosts(): SagaIterator {
  try {
    const posts = yield call(getPosts);
    // After the api call is done, dispatch an action with the payload
    yield put(Actions.setPosts(posts));
  } catch (e) {
    console.error(e);
  }
}

function* fetchPostBySlug(action: BaseAction): SagaIterator {
  try {
    // call use the first arg as the function and the next ones as the args for the function.
    const post = yield call(
      getPostBySlug,
      action.payload.postSlug as string,
      action.payload.id
    );
    yield put(Actions.setPost(post));
  } catch (e) {
    console.error(e);
  }
}

// all posts sagas in one place
// Dispatching an event will fire an Action.
export function* sagas(): Generator {
  yield takeLatest(Events.getPosts, fetchPosts);
  yield takeLatest(Events.getPostBySlug, fetchPostBySlug);
}
