import { State } from "store/state";

export const posts = (state: State) => state.posts;
export const postsItem = (state: State) => state.posts.data;
