import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Post } from "@models/post";

interface Props {
  post: Post;
}

const Container = styled.div``;
const Title = styled.h2``;
export const Component: FunctionComponent<Props> = ({ post }: Props) => (
  <Container>
    <Title>{post.title}</Title>
  </Container>
);

export default Component;
