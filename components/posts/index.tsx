import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Link from "next/link";
import { map } from "lodash";
import { Post as PostModel } from "@models/post";
import PostItem from "./post";
// import { Post } from "@core/posts";

interface Props {
  posts?: PostModel[];
}

const StyledLink = styled.a`
  color: black;
  cursor: pointer;
`;

const Component: FunctionComponent<Props> = ({ posts }: Props) => {
  // const newPosts = Post.getAll();
  return (
    <div>
      {map(posts, post => (
        <Link key={post.id} href="/p/[slug]" as={`/p/${post.slug}`}>
          <StyledLink>
            <PostItem post={post} />
          </StyledLink>
        </Link>
      ))}
    </div>
  );
};

export default Component;
