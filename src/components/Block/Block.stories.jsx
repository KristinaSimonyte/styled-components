import React from "react";
import Block from "./Block";

export default {
  title: "Block",
  component: Block,
};

export const Primary = () => <Block color='primary'>Some text</Block>;
export const Success = () => <Block color='success'>Some more text</Block>;
export const Danger = () => <Block color='danger'>All of this are evenly spaced</Block>;

