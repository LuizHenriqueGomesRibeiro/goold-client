"use client";

import { SearcherContainer, TopBar } from "../../components";
import { SystemCommonTemplateComponent } from "../styles";

export default function AgendamentosTemplate() {
  return <SystemCommonTemplateComponent>
    <TopBar
      text="Agendamento"
      title="Acompanhe todos os seus agendamentos de forma simples"
    />
    <section>
      <SearcherContainer>
        luiz
      </SearcherContainer>
    </section>
  </SystemCommonTemplateComponent>
}