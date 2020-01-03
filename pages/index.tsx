import React from "react";
import Head from "next/head";
import { Post as PostModel } from "@models/post";
import { getPosts } from "@core/api";
import PostList from "@components/posts";
import { NextPage } from "next/types";

interface Props {
  posts: PostModel[];
}

const Home = ({ posts }: Props) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello there</h1>
      <PostList posts={posts} />
    </div>
  );
};

Home.getInitialProps = async function() {
  const posts = await getPosts();
  return {
    posts
  };
};

export default Home;
