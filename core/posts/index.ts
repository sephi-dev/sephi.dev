import { useDispatch, useSelector } from "react-redux";
import { Events, Actions } from "./actions";
import { sagas } from "./sagas";
import { postReducer } from "./reducer";
import { postsItem } from "./selectors";

function useGetPosts() {
  // Dispatch the event will get the posts.
  const dispatch = useDispatch();
  return () => dispatch(Events.getPosts());
}

function useGetPostBySlug() {
  const dispatch = useDispatch();
  return () => dispatch(Events.getPostBySlug);
}

function usePostsSelector() {
  return useSelector(postsItem);
}

export const Post = {
  getAll: useGetPosts,
  reducer: postReducer,
  actions: Actions,
  postsSelector: usePostsSelector,
  sagas
};
