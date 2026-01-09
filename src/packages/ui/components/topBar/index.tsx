import styled from "styled-components";
import colors from "../../themes";
import Text from "../text";

const Component = styled.div`
  height: 100px;
  width: 100%;
  border-bottom: 1px solid ${colors["light-brown"]};
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 0 0 34px;
`

export default function TopBar() {
  return <Component>
    <Text type="title">Minha conta</Text>
    <Text type="normal">Ajuste informações da sua conta de forma simples</Text>
  </Component>
}