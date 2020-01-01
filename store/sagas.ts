import { Post } from "@core/posts";
import { all, call } from "redux-saga/effects";

export function* rootSaga(): Generator {
  yield all([call(Post.sagas)]);
}
