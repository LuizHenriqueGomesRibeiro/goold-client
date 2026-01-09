"use client"

import CommonFormContent from "../CommonFormContent";
import styled from "styled-components";
import Input from "../../input";
import Button from "../../buttons";
import Text from "../../text";

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  > footer {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > div {
      width: 370px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

export default function LoginForm() {

  return <CommonFormContent>
    <FormContent>
      <div>
        <Input 
          label={<>E-mail <span>(obrigatorio)</span></>} 
          placeholder="Insira seu e-mail"
        />
        <Input 
          label={<>Senha de acesso <span>(Obrigatorio)</span></>}
          placeholder="Insira sua senha"
        />
      </div>
      <footer>
        <Button>Acessar conta</Button>
        <div>
          <Text>
            <span>Ainda não tem um cadastro?</span>
          </Text>
          <Button variant="link">Cadastre-se</Button>
        </div>
      </footer>
    </FormContent>
  </CommonFormContent>
}