import { Calendar, Log, Logo, People } from "../images";
import styled from "styled-components";
import colors from "../../themes";
import Text from "../text";

const LateralBarComponent = styled.div`
  width: 260px;
  position: fixed;
  height: 100vh;
  border-right: 1px solid ${colors["light-brown"]};
  background-color: ${colors["primary-layout"]};
  z-index: 11;

  > header {
    border-bottom: 1px solid ${colors["light-brown"]};
    height: 100px;
    display: flex;
    align-items: center;

    > div {
      margin-left: 23px;
      width: 52px;
      height: 52px;
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 100px);

    > main {
      padding: 20px 16px 0 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      
      > div {
        flex-direction: row;
        display: flex;
        border-radius: 5px;
        padding: 12px;
        gap: 15px;
      }
    }
  
    > footer {
      border-top: 1px solid #D7D7D7;
      height: 70px;
      padding: 17px 19px 16px 21px;

      > section {
        display: flex;
        flex-direction: column;
      }
    }
  }
`

export default function LateralBar() {

  return <LateralBarComponent>
    <header>
      <div>
        <Logo/>

      </div>

    </header>
    <section>
      <main>
        <div>
          <Calendar />
          <Text>Agendamento</Text>
        </div>
        <div>
          <People />
          <Text>Clientes</Text>
        </div>
        <div>
          <Log />
          <Text>Logs</Text>
        </div>
      </main>
      <footer>
        <section>
          <Text>Mateus Barbosa</Text>
          <Text>
            <span>Admin</span>
          </Text>
        </section>
        
      </footer>

    </section>
  </LateralBarComponent>
}