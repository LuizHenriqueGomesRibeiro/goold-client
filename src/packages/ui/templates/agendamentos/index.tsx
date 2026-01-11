"use client";

import { Close, GooldModal, ScheduleRoom, ScheduleTransation, SearcherContainer, Table, Text, TopBar } from "../../components";
import { SystemCommonTemplateComponent } from "../styles";
import Button from "../../components/buttons";
import styled from "styled-components";
import colors from "../../themes";

const ClientName = styled.div`
  justify-content: center;
  flex-direction: column;
  align-self: center;
  display: flex;
  padding-top: 12px;

  > span {
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: left;
    width: 100%;
  }
`

const ClientColor = styled.section<{ element: number }>`
  background: ${({ element }) => {
    if (element === 2) return colors["light-red"];
    else if (element === 1) return colors["light-green"];
    return colors.white;
  }};
`

export default function AgendamentosTemplate() {
  return <SystemCommonTemplateComponent>
    <TopBar
      text="Agendamento"
      title="Acompanhe todos os seus agendamentos de forma simples"
    />
    <section>
      <SearcherContainer>
        <Table columns={5} $rightLastColumn>
          <header>
            <div><Text type="normal-12">Data agendamento</Text></div>
            <div><Text type="normal-12">Nome</Text></div>
            <div><Text type="normal-12">Sala de agendamento</Text></div>
            <div><Text type="normal-12">Status transação</Text></div>
            <div><Text type="normal-12">Ação</Text></div>
          </header>
          <main>
            {[0, 1, 1, 0, 0, 2, 0, 1, 0, 0].map((element, index) => <ClientColor key={index} element={element}>
              <div>Criação de agendamento</div>
              <ClientName>
                <Text type="normal">Camila Mendes</Text>
                <Text type="normal-12">
                  <span>Cliente</span>
                </Text>
              </ClientName>
              <ScheduleRoom/>
              <ScheduleTransation element={element}/>
              <div>
                {element !== 2 && <Button variant="close" children />}
              </div>
            </ClientColor>)}
          </main>
        </Table>
      </SearcherContainer>
    </section>
    {/* <GooldModal/> */}
  </SystemCommonTemplateComponent>
}