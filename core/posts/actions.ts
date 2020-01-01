import { createAction } from "typesafe-actions";
import { Post } from "@models/post";

export const Events = {
  getPosts: createAction("posts/get")<undefined>()
};

export const Actions = {
  setPosts: createAction("posts/set")<Post[]>()
};
