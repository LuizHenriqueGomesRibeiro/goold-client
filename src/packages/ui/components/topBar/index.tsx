import styled from "styled-components";
import colors from "../../themes";
import Text from "../text";

const TopBarComponent = styled.div`
  border-bottom: 1px solid ${colors["light-brown"]};
  background-color: ${colors["secundary-layout"]};
  flex-direction: column;
  position: fixed;
  display: flex;
  padding: 22px 0 0 34px;
  height: 100px;
  width: 100%;
  gap: 6px;
`

export default function TopBar() {
  return <TopBarComponent>
    <Text type="title">Minha conta</Text>
    <Text type="normal">Ajuste informações da sua conta de forma simples</Text>
  </TopBarComponent>
}