"use client";

import styled, { css } from "styled-components";
import colors from "../../themes";

const Title = css`
  color: ${colors.black};
  font-size: 28px;
  font-weight: 600;
  font-style: normal;
  line-height: 28px;
  height: 34px;
`;

const Normal = css`
  color: ${colors.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; 

  > span {
    font-weight: 400;
  }
`;

type TextType = "title" | "normal";

const TextComponent = styled.span<{ $type: TextType }>`
  font-family: "Montserrat", sans-serif;

  ${({ $type }) => {
    switch ($type) {
      case "title":
        return Title;
      case "normal":
      default:
        return Normal;
    }
  }}
`;

type TextProps = {
  children: React.ReactNode;
  type?: TextType;
};

export default function Text({ children, type = "normal" }: TextProps) {
  return <TextComponent $type={type}>{children}</TextComponent>;
}
