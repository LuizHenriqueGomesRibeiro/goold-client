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
    display: flex;
    width: 17px;
    height: 18px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    aspect-ratio: 17/18;
    border-radius: 4px;
    background: ${colors.black};
  }

  > span {
    display: flex;
    width: 25.2px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 5px;
    background: ${colors.black};
  }
`

export default function Paginator() {

  return <PaginatorComponent>
    <section>
      <Left/>
    </section>
    <Text type="normal" selected>1</Text>
    <section>
      <Right/>
    </section>
  </PaginatorComponent>
}