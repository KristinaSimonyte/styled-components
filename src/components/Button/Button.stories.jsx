import React from "react";
import Button from "./Button";

export const Primary = () => <Button color='primary' type='submit'>Save changes</Button>;
export const Success = () => <Button color='success' type='reset'>Save and continue</Button>;
export const Danger = () => <Button color='danger' type='button'>Cancel</Button>;

export default {
  title: "Button",
  component: Button,
};