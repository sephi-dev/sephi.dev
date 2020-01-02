import { useDispatch } from "react-redux";
import { Events, Actions } from "./actions";
import { sagas } from "./sagas";
import { postReducer } from "./reducer";

function useGetPosts() {
  const dispatch = useDispatch();
  return () => dispatch(Events.getPosts());
}

export const Post = {
  getAll: useGetPosts,
  sagas,
  reducer: postReducer,
  actions: Actions
};
