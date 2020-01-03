import { useDispatch, useSelector } from "react-redux";
import { Events, Actions } from "./actions";
import { sagas } from "./sagas";
import { postReducer } from "./reducer";
import { postsItem } from "./selectors";

function useGetPosts() {
  const dispatch = useDispatch();
  return () => dispatch(Events.getPosts());
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
