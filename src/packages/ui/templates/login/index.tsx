"use client"

import { Content, LoginForm, LoginHeader, Text } from "../../components";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  flex: 1;

  gap: 1.5625rem;

  height: calc(100vh - 86px);
`;

export default function LoginTemplate() {
  return <Content>
    <LoginHeader/>
    <CenteredContainer>
      <Text type="title">Entre na sua conta</Text>
      <LoginForm />
    </CenteredContainer>
  </Content>
}