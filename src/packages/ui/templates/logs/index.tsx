"use client";

import { Calendar, SearcherContainer, Table, Text, TopBar } from "../../components";
import { SystemCommonTemplateComponent } from "../styles";
import styled from "styled-components";
import colors from "../../themes";

const TableCard = styled.div`
  display: flex;
  padding: 6px 10px;
  align-items: center;
  gap: 6px;
  border-radius: 60px;
  border: 1px solid ${colors["light-brown"]};
  background: ${colors["primary-layout"]};
  font-size: 10px;
  width: fit-content;
  color: ${colors.black};
  font-weight: 500;
`;

export default function LogsTemplate() {
  return <SystemCommonTemplateComponent>
    <TopBar
      text="Logs"
      title="Acompanhe todos as suas Logs"
    />
    <section>
      <SearcherContainer>
        <Table columns={3}>
          <header>
            <div><Text type="normal-12">Tipo de atividade</Text></div>
            <div><Text type="normal-12">Módulo</Text></div>
            <div><Text type="normal-12">Data e horário</Text></div>
          </header>
          <main>
            {[1, 2, 3, 4, 5, 6,7, 4, 5, 6,7].map(() => <section>
              <div><TableCard>Criação de agendamento</TableCard></div>
              <div><TableCard>
                <Calendar size={12}/>
                Agendamento
              </TableCard></div>
              <div><TableCard>04/06/2025 às 22:00</TableCard></div>
            </section>)}
            
          </main>
        </Table>
      </SearcherContainer>
    </section>
  </SystemCommonTemplateComponent>
}
