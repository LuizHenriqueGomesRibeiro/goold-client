"use client";

import styled from "styled-components";
import Paginator from "../paginator";
import colors from "../../themes";
import Button from "../buttons";
import Input from "../input";

const SearcherContainerComponent = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  width: 100%;
  gap: 25px;

  > section {
    border: 1px solid ${colors["light-brown"]};
    flex-direction: column;
    display: flex;
    border-radius: 5px;
    padding: 30px;
    height: 100%;

    > header {
      border-bottom: 1px solid ${colors["light-brown"]};
      justify-content: space-between;
      flex-direction: row;
      display: flex;
      padding-bottom: 20px;

      > div {
        flex-direction: row;
        display: flex;
        width: 633px;
        gap: 15px;

        > span:nth-child(1) {
          width: 441px !important;
        }

      }
    }

    > main {

    }
  }

  > footer {
    justify-content: center;
    display: flex;
    height: 26px;
  }
`

export default function SearcherContainer({ children }: { children: React.ReactNode }) {
  return <SearcherContainerComponent>
    <section>
      <header>
        <div>
          <Input placeholder="Filtre por nome" />
          <Input placeholder="Selecione" />
        </div>
        <Button variant='primary'>Novo Agendamento</Button>
      </header>
      <main>
        {children}
      </main>
    </section>
    <footer>
      <Paginator/>
    </footer>
  </SearcherContainerComponent>
}