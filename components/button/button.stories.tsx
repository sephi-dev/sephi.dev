import React from "react";
import Button from "./";

export const defaultButton = () => (
  <Button
    label="Click me!"
    isDisabled={false}
    onClick={() => console.info("clicked")}
  />
);
