"use client";

import { TopBar } from "../../components";
import styled from "styled-components";
import colors from "../../themes";

const Component = styled.div`
  height: 100vh;
  width: calc(100% - 260px);
  display: flex;
  position: relative;
  float: right;
  background-color: ${colors["secundary-layout"]};
  
  > body {
  }
`

export default function ContaTemplate() {
  return <Component>
    <TopBar/>
    <body>
      
    </body>
  </Component>
}