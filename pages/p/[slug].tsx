import React from "react";
import { NextPageContext } from "next";
import { getPostBySlug } from "@core/api";
import { Post as PostModel } from "@models/post";
import PostView from "@components/post";

interface Props {
  post: PostModel;
}

const Post = ({ post }: Props) => {
  return <PostView data={post} />;
};

Post.getInitialProps = async (context: NextPageContext) => {
  const post = await getPostBySlug(context.query.slug as string, "");
  return { post };
};

export default Post;
