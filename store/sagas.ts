import { Post } from "@core/posts";
import { all, call } from "redux-saga/effects";

// agregate all sagas into this one to make the store aware they're there
export function* rootSaga(): Generator {
  yield all([call(Post.sagas)]);
}
