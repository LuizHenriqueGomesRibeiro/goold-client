"use client";

import { Content, LateralBar } from "@/src/packages/ui/components";
import colors from "@/src/packages/ui/themes";
import styled from "styled-components";

const SystemLayout = styled.div`
  flex-direction: row;
  display: flex;
`

const CurrentLayout = styled.div`
  width: calc(100% - 260px);
  margin-left: 260px;
  background-color: ${colors["secundary-layout"]};
  z-index: 10;
  height: 100vh;
`

export default function Layout({ children }: {
  children: React.ReactNode;
}) {

  return <Content>
    <SystemLayout>
      <LateralBar/>
      <CurrentLayout>
        {children}
      </CurrentLayout>
    </SystemLayout>
  </Content>
}