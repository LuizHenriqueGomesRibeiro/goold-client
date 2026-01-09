"use client";

import styled from "styled-components";
import colors from "../../themes";

const Component = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${colors["primary-layout"]};
`

export default function Content({ children }: { children: React.ReactNode }) {
  return <Component 

  >
    {children}
  </Component>;
}