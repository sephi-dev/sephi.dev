import React from "react";
import { Post as PostModel } from "@models/post";

interface Props {
  data: PostModel;
}

const Component = ({ data }: Props) => <div>{data.title}</div>;

export default Component;
