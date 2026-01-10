"use client";

import useCadastro from "@/src/packages/core/hooks/cadastro";
import { SystemCommonTemplateComponent } from "../styles";
import { RegisterForm, TopBar } from "../../components";

export default function ContaTemplate() {
  const { register } = useCadastro();
  return <SystemCommonTemplateComponent>
    <TopBar 
      title="Minha conta"
      text="Ajuste informações da sua conta de forma simples"
    />
    <section>
      <RegisterForm register={register}/>
    </section>
  </SystemCommonTemplateComponent>
}