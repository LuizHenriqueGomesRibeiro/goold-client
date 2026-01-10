"use client";

import styled from "styled-components";
import colors from "../../themes";
import React from "react";

const LogsTable = styled.div<{ columns: number }>`
  height: 100%;

  > header {
    width: 100%;
    flex-direction: row;
    display: flex;
    margin-top: 20px;
    border-bottom: 1px solid ${colors["light-brown"]};

    > div {
      padding: 12px;
      width: ${({ columns }) => `${100 / columns}%`};
    }
  }

  > main {
    height: calc(100% - 114px);
    overflow-y: auto;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    
    > section {
      border-bottom: 1px solid ${colors["light-brown"]};
      flex-direction: row;
      display: flex;
      
      > div {
        width: ${({ columns }) => `${100 / columns}%`};
        height: 60px;
        padding: 0 12px;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default function Table({ children, columns }: { children: React.ReactNode, columns: number }) {
  return <LogsTable columns={columns}>
    {children}
  </LogsTable>
}