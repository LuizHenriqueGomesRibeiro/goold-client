"use client"

import styled from "styled-components";
import colors from "../../../themes";

export const Component = styled.div`
  padding: 1.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 28rem;
  border: 1px solid ${colors["light-brown"]};
  border-radius: 5px;
  background: ${colors["secundary-layout"]};
`;

export default function CommonFormContent({ children }: { children: React.ReactNode }) {
  return <Component 

  >
    {children}
  </Component>
}