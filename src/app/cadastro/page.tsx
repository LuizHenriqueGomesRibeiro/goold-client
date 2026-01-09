"use client";

import useCadastro from "@/src/packages/core/hooks/cadastro";
import { CadastroTemplate } from "@/src/packages/ui/templates";

export default function Cadastro() {
  const cadastro = useCadastro();

  return <CadastroTemplate {...cadastro}/>
}