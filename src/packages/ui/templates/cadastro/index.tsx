"use client";

import styled from "styled-components";
import { Content, LoginHeader, RegisterForm, Text } from "../../components";
import { CadastroHookProps } from "@/src/packages/core/hooks/cadastro";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  flex: 1;

  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  gap: 1.5625rem;

  position: relative;
  margin: 86px 0;
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