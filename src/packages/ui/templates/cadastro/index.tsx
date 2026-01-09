"use client";

import { Content, LoginHeader, RegisterForm, Text } from "../../components";
import { CadastroHookProps } from "@/src/packages/core/hooks/cadastro";
import styled from "styled-components";

const CenteredContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: visible;
  display: flex;

  min-height: calc(100vh - 86px);
  padding: 50px 0 80px 0;
  margin-top: 86px;
  gap: 1.5625rem;
  width: 100%;
  flex: 1;
`;

interface CadastroTemplateProps extends CadastroHookProps {

}

export default function CadastroTemplate({ register }: CadastroTemplateProps) {
  return <Content>
    <LoginHeader/>
    <CenteredContainer>
      <Text type="title">Cadastre-se</Text>
      <RegisterForm register={register}/>
    </CenteredContainer>
  </Content>
}