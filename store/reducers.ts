import { Post } from "@core/posts";
import { combineReducers } from "redux";
import { State } from "./state";

const rootReducer = combineReducers<State>({
  posts: Post.reducer
});

export default rootReducer;
