"use client";

import { Left, Right } from "../images";
import styled from "styled-components";
import colors from "../../themes";
import Text from "../text";

const PaginatorComponent = styled.div`
  justify-content: center;
  align-content: center;
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 7px;

  > section {
    background: ${colors.black};
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    aspect-ratio: 17/18;
    border-radius: 4px;
    height: 18px;
    width: 17px;
    gap: 10px;
    cursor: pointer;
  }

  > span {
    background: ${colors.black};
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    display: flex;
    border-radius: 5px;
    width: 25.2px;
    gap: 10px;
  }
`

export default function Paginator() {
  return <PaginatorComponent>
    <section>
      <Left/>
    </section>
    <Text type="normal-12" selected>1</Text>
    <section>
      <Right/>
    </section>
  </PaginatorComponent>
}