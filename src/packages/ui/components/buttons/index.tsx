"use client";

import styled, { css } from "styled-components";
import colors from "../../themes";
import { Close } from "../images";

const Primary = css`
  background-color: ${colors.black};
  color: #ffffff;
  display: flex;
  height: 2.75rem;
  padding: 9px 30px;

  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  line-height: 1.5rem;

  border-radius: 5px;
  border: none;
`;

const Link = css`
  background-color: transparent;
  color: ${colors.black};

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

const CloseStyled = css`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  aspect-ratio: 1/1;
  border-radius: 60px;
  background: #000;
`

type ButtonType = "primary" | "link" | "close";

const ButtonComponent = styled.button<{ $type: ButtonType }>`
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  justify-content: center;
  align-self: stretch;
  align-items: center;

  ${({ $type }) => {
    switch ($type) {
      case "close":
        return CloseStyled;
      case "link":
        return Link;
      case "primary":
      default:
        return Primary;
    }
  }}
`;

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const currentChildren = variant === 'close' ? <Close/> : children;
  return <ButtonComponent $type={variant} {...props}>
    {currentChildren}
  </ButtonComponent>
}
