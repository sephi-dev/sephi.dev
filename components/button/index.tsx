import React, { MouseEvent } from "react";
import styled from "styled-components";

export enum Type {
  Primary = "primary",
  Secondary = "secondary"
}

interface IProps {
  label: string;
  isDisabled: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = styled.button(
  props => `
  display: inline-block;
  text-align: center;
  background: ${props.theme}
`
);

const Component = ({ label, isDisabled = false, onClick }: IProps) => (
  <Button type="submit" disabled={isDisabled} onClick={onClick}>
    {label}
  </Button>
);

export default Component;
