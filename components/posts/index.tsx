import React, { FunctionComponent } from "react";
import { map } from "lodash";
import { Post as PostModel } from "@models/post";
import PostItem from "./post";
import { Post } from "@core/posts";

interface Props {
  posts?: PostModel[];
}

const Component: FunctionComponent<Props> = ({ posts }: Props) => {
  const newPosts = Post.getAll();
  console.log(newPosts);
  return (
    <div>
      {map(posts, post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Component;
