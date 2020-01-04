import { createAction } from "typesafe-actions";
import { Post } from "@models/post";

export const Events = {
  getPosts: createAction("posts/get")<void>(),
  getPostBySlug: createAction("post/get/by-slug")<void>()
};

export const Actions = {
  setPosts: createAction("posts/set")<Post[]>(),
  setPost: createAction("post/set")<Post>()
};
