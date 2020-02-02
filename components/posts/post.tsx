import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Post } from "@models/post";

interface Props {
  post: Post;
}

const Container = styled.div`
  margin: 0 0 3.2rem;
`;
const Title = styled.h2``;
const Text = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;

export const Component: FunctionComponent<Props> = ({ post }: Props) => (
  <Container>
    <Title>{post.title}</Title>
    <Text>{post.excerpt}</Text>
  </Container>
);

export default Component;
