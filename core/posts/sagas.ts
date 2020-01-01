import { call, put, takeEvery } from "redux-saga/effects";
import { Actions, Events } from "./actions";
import { getPosts } from "@core/api";

function* fetchPosts() {
  console.info("coucou");
  try {
    console.info("coucou x2");
    const posts = yield call(getPosts);
    yield put(Actions.setPosts(posts));
  } catch (e) {
    console.error(e);
  }
}

export function* sagas(): Generator {
  yield takeEvery(Events.getPosts, fetchPosts);
}
