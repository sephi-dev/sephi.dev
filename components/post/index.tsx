import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Post as PostModel } from "@models/post";

interface Props {
  data: PostModel;
}

const Title = styled.h1`
  font-size: 3.4rem;
`;

const Content = styled.div`
  font-size: 1.6rem;
  line-height: 1.6;
  h2 {
    font-size: 2.6rem;
  }
  h3 {
    font-size: 2.4rem;
  }
  h4 {
    font-size: 2rem;
  }
  li {
    margin-bottom: 1.4rem;
  }
  blockquote {
    font-size: 1.8rem;
    font-style: italic;
    padding: 1.2rem;
  }
`;

const Component: FunctionComponent<Props> = ({ data }: Props) => (
  <div>
    <Title>{data.title}</Title>
    <Content dangerouslySetInnerHTML={{ __html: data.html }} />
  </div>
);

export default Component;
