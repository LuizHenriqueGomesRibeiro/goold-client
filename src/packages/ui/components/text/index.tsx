"use client";

import styled, { css } from "styled-components";
import colors, { ColorOptions } from "../../themes";

const Title = css`
  color: ${colors.black};
  font-size: 28px;
  font-weight: 600;
  font-style: normal;
  line-height: 28px;
  height: 34px;
`;

const Normal = css<{ $selected?: boolean }>`
  color: ${({ $selected }) => $selected ? colors.white : colors.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; 

  > span {
    font-weight: 400;
  }

  > strong {
    font-weight: 700;
  }
`;

const Normal12 = css`
  ${Normal};
  font-size: 12px;
`

type TextType = "title" | "normal" | "normal-12";

const TextComponent = styled.span<{ $type: TextType, $selected?: boolean, $color?: string }>`
  font-family: "Montserrat", sans-serif;

  color: ${({ $color }) => $color && `${$color} !important`};

  ${({ $type }) => {
    switch ($type) {
      case "normal-12":
        return Normal12;
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
  selected?: boolean;
  color?: ColorOptions
};

export default function Text({ children, type = "normal", selected = false, color }: TextProps) {
  return <TextComponent $type={type} $selected={selected} $color={color}>{children}</TextComponent>;
}
