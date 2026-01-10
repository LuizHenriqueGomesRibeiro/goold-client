"use client";

import styled, { css } from "styled-components";
import { IMaskInput } from "react-imask";
import colors from "../../themes";
import Text from "../text";
import React from "react";

const Password = css`

`

const Normal = css`

`

type InputType = "password" | "normal";

const InputComponent = styled.span<{ $type: InputType, $disabled: boolean }>`
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

    background-color: ${({ $disabled }) => $disabled ? colors["light-grey"] : colors["white"]};

    color: ${colors.black};

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

type InputProps = {
  type?: InputType;
  label?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  mask?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value"
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
    type = "normal",
    label,
    placeholder,
    disabled = false,
    mask,
    ...props
  },
  ref
) => {
    return <InputComponent $type={type} $disabled={disabled}>
      {label && <span>
        <Text type="normal">{label}</Text>
      </span>}
      {mask ? <IMaskInput
        mask={mask}
        disabled={disabled}
        inputRef={ref}
        placeholder={placeholder}
        {...props}
      /> : <input
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
        type={type === "password" ? "password" : "text"}
        {...props}
      />}
    </InputComponent>
  }
);

Input.displayName = "Input";
export default Input;