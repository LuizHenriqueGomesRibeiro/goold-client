"use client"

import styled from "styled-components";
import { Logo } from "../images";
import colors from "../../themes";
import Button from "../buttons";

const Component = styled.div`
  border-bottom: 1px solid ${colors['light-brown']};
  position: fixed;
  width: 100vw;
  z-index: 10;
  background: ${colors["primary-layout"]};
  
  > div {
    display: flex;
    flex-direction: row;
    max-width: 81.5rem;
    height: 2.75rem; 
    margin: 1.25rem auto;
    justify-content: space-between;
    padding: 0 2rem;

    > button {
    }
  }
`

export default function LoginHeader() {
  return <Component>
    <div>
      <Logo/>
      <Button>Cadastre-se</Button>
    </div>
  </Component>
}