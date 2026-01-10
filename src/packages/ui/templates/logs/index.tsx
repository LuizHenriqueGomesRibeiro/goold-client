"use client";

import { Calendar, SearcherContainer, Text, TopBar } from "../../components";
import { SystemCommonTemplateComponent } from "../styles";
import styled from "styled-components";
import colors from "../../themes";

const LogsTable = styled.div`
  height: 100%;

  > header {
    width: 100%;
    flex-direction: row;
    display: flex;
    margin-top: 20px;
    border-bottom: 1px solid ${colors["light-brown"]};

    > div {
      padding: 12px;
      width: 30%;
    }
  }

  > main {

    > section {
      border-bottom: 1px solid ${colors["light-brown"]};
      flex-direction: row;
      display: flex;
      
      > div {
        width: 30%;
        height: 60px;
        padding: 0 12px;
        display: flex;
        align-items: center;
      }
    }
  }
`;

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
        <LogsTable>
          <header>
            <div><Text type="normal-12">Tipo de atividade</Text></div>
            <div><Text type="normal-12">Módulo</Text></div>
            <div><Text type="normal-12">Data e horário</Text></div>
          </header>
          <main>
            <section>
              <div><TableCard>Criação de agendamento</TableCard></div>
              <div><TableCard>
                <Calendar size={12}/>
                Agendamento
              </TableCard></div>
              <div><TableCard>04/06/2025 às 22:00</TableCard></div>
            </section>
            
          </main>
        </LogsTable>
      </SearcherContainer>
    </section>
  </SystemCommonTemplateComponent>
}
