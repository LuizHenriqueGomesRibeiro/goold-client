"use client";

import styled from "styled-components";
import Button from "../buttons";
import Input from "../input";
import colors from "../../themes";
import Paginator from "../paginator";

const SearcherContainerComponent = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  width: 100%;
  gap: 25px;

  > section {
    border: 1px solid #D7D7D7;
    justify-content: center;
    flex-direction: column;
    display: flex;
    border-radius: 5px;
    padding: 30px;

    > header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid ${colors["light-brown"]};

      > div {
        display: flex;
        flex-direction: row;
        gap: 15px;
        width: 633px;

        > span:nth-child(1) {
          width: 441px !important;
        }

      }
    }

    > main {

    }
  }

  > footer {
    height: 26px;
    display: flex;
    justify-content: center;
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