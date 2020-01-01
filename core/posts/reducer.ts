import { Post } from "@models/post";
import produce from "immer";
import { getType, ActionType } from "typesafe-actions";
import { Actions } from "./actions";

export interface PostState {
  data: Post[] | null;
  errors: string[] | string | null;
  loading: boolean;
}

export type PostAction = ActionType<typeof Actions.setPosts>;

const initialState: PostState = {
  data: null,
  errors: [],
  loading: false
};

export const postReducer = (
  state: PostState = initialState,
  action: PostAction
): PostState => {
  return produce(state, draft => {
    switch (action.type) {
      case getType(Actions.setPosts):
        draft.data = action.payload;
        break;
      default:
        return state;
    }
  });
};
