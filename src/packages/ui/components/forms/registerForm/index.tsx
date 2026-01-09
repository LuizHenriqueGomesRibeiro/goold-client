"use client";

import CommonFormContent from "../CommonFormContent";
import styled from "styled-components";
import Input from "../../input";
import Button from "../../buttons";
import colors from "../../../themes";

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 20px;

    > span {
      width: calc(50% - 10px);
    }
  }

  > footer {  
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  > section {
    width: 100%;
    height: 1px;
    background: ${colors["light-brown"]};
  }
`

export default function RegisterForm() {

  return <CommonFormContent>
    <FormContent>
      <div>
        <Input label={<>Nome <span>(obrigatorio)</span></>} placeholder="ex.: Jose"/>
        <Input label={<>Sobrenome <span>(obrigatorio)</span></>} placeholder="ex.: Lima"/>
      </div>
      <Input label={<>E-mail <span>(obrigatorio)</span></>} placeholder="Insira seu e-mail"/>
      <Input label={<>Senha de acesso <span>(obrigatorio)</span></>} placeholder="Insira sua senha"/>
      <section/>
      <Input label={<>CEP <span>(obrigatorio)</span></>} placeholder="Insira sua senha"/>
      <Input label={<>Endereço</>} />
      <Input label={<>Número</>} />
      <Input label={<>Complemento</>} placeholder="Insira sua senha"/>
      <Input label={<>Cidade</>} placeholder="Insira seu CEP"/>
      <Input label={<>Estado</>} placeholder="Insira seu e-mail"/>
      <footer>
        <Button>Cadastrar-se</Button>
      </footer>
    </FormContent>
  </CommonFormContent>
}