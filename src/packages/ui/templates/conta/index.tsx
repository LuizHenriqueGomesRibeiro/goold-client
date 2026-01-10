"use client";

import { RegisterForm, TopBar } from "../../components";
import useCadastro from "@/src/packages/core/hooks/cadastro";
import styled from "styled-components";

const ContaTemplateComponent = styled.div`
  height: 100vh;
  overflow: hidden;

  > section {
    margin: 100px auto 0 auto;
    height: calc(100vh - 100px);
    overflow-y: auto;
    padding: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
  }
`

export default function ContaTemplate() {
  const { register } = useCadastro();
  return <ContaTemplateComponent>
    <TopBar/>
    <section>
      <RegisterForm register={register}/>
    </section>
  </ContaTemplateComponent>
}