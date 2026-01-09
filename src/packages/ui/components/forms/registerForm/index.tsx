"use client";

import { CadastroFormFields } from "@/src/packages/core/hooks/cadastro";
import CommonFormContent from "../CommonFormContent";
import styled from "styled-components";
import colors from "../../../themes";
import Button from "../../buttons";
import Input from "../../input";

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
    margin-top: 5px;
  }

  > section {
    width: 100%;
    height: 1px;
    background: ${colors["light-brown"]};
  }
`

interface RegisterFormProps {
  register: CadastroFormFields
}

export default function RegisterForm({ register }: RegisterFormProps) {
  return <CommonFormContent>
    <FormContent>
      <div>
        <Input label={<>Nome <span>(obrigatorio)</span></>} placeholder="ex.: Jose" {...register('name')} />
        <Input label={<>Sobrenome <span>(obrigatorio)</span></>} placeholder="ex.: Lima" {...register('surname')}/>
      </div>
      <Input label={<>E-mail <span>(obrigatorio)</span></>} placeholder="Insira seu e-mail" {...register('email')}/>
      <Input label={<>Senha de acesso <span>(obrigatorio)</span></>} placeholder="Insira sua senha" {...register('password')} type="password"/>
      <section/>
      <Input label={<>CEP <span>(obrigatorio)</span></>} placeholder="cep" {...register('cep')} mask="00000-000"/>
      <Input label={<>Endereço</>} disabled placeholder="Insira sua senha" {...register('address')}/>
      <Input label={<>Número</>} placeholder="00" {...register('number')} mask="000"/>
      <Input label={<>Complemento</>} placeholder="complemento" {...register('complement')}/>
      <Input label={<>Cidade</>} placeholder="cidade" {...register('city')}/>
      <Input label={<>Estado</>} placeholder="estado" {...register('state')}/>
      <footer>
        <Button>Cadastrar-se</Button>
      </footer>
    </FormContent>
  </CommonFormContent>
}