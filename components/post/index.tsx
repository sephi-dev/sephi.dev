import React from "react";
import { Post as PostModel } from "@models/post";

interface Props {
  data: PostModel;
}

const Component = ({ data }: Props) => (
  <div>
    <h2>{data.title}</h2>
    <p>{data.excerpt}</p>
  </div>
);

export default Component;
