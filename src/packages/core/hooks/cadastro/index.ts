"use client";

import { useForm, UseFormRegister } from "react-hook-form";

interface CadastroFormDataProps {
  name: string, 
  surname: string,
  email: string,
  password: string,
  cep: string,
  address?: string,
  number?: string,
  district?: string,
  city?: string,
  state?: string,
  complement?: string,
}

export type CadastroFormFields = UseFormRegister<CadastroFormDataProps>;

export interface CadastroHookProps {
  register: CadastroFormFields,
}

export default function useCadastro(): CadastroHookProps {
  const {
    register,
    watch
  } = useForm<CadastroFormDataProps>();
  console.log(watch());


  return {
    register
  }
}