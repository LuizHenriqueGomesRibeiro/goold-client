"use client";

import styled, { css } from "styled-components";
import colors from "../../themes";

const Primary = css`
  background-color: ${colors.black};
  color: #ffffff;
  display: flex;
  height: 2.75rem;
  padding: 0.625rem 104.19px;

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

type ButtonType = "primary" | "link";

const Component = styled.button<{ $type: ButtonType }>`
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  justify-content: center;
  align-self: stretch;
  align-items: center;

  ${({ $type }) => {
    switch ($type) {
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
  return (
    <Component $type={variant} {...props}>
      {children}
    </Component>
  );
}
