"use client";

import styled, { css } from "styled-components";
import Text from "../text";
import colors from "../../themes";

const Password = css`

`

const Normal = css`

`

type InputType = "password" | "normal";

const Component = styled.span<{ $type: InputType }>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  * {
    font-family: "Montserrat", sans-serif;
  }

  > span {
    height: 20px;
  }

  > input {
    display: flex;
    height: 44px;
    padding: 12px 14px 12px 13px;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    border-radius: 5px;
    border: 1px solid ${colors["light-brown"]};
    background: #FFF;

    color: #AFAFAF;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    width: auto;
  }

  ${({ $type }) => {
    switch ($type) {
      case "password":
        return Password;
      case "normal":
      default:
        return Normal;
    }
  }}
`;


export default function Input({ type = "normal", label, placeholder }: { type?: InputType, label?: React.ReactNode, placeholder?: string }) {
  return <Component $type={type}>
    <span>
      <Text type="normal">
        {label}
      </Text>
    </span>
    <input placeholder={placeholder}/>
  </Component>
}