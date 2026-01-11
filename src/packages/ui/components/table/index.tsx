"use client";

import styled, { css } from "styled-components";
import colors from "../../themes";
import React from "react";

const lastColumnRight = css`
  > div:last-child {
    justify-content: right;
    flex-direction: row;
    display: flex;
    margin: auto 0;
    gap: 10px;
    
    > button {
      align-self: center;
    }
  }

`

const LogsTable = styled.div<{ columns: number, $rightLastColumn: boolean }>`
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

    ${({ $rightLastColumn }) => $rightLastColumn && lastColumnRight};
  }

  > main {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: auto;
    height: calc(100vh - 366px);

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
      
      ${({ $rightLastColumn }) => $rightLastColumn && lastColumnRight};
    }
  }
`;

export default function Table({ children, columns, $rightLastColumn = false }: { children: React.ReactNode, columns: number, $rightLastColumn?: boolean }) {
  return <LogsTable columns={columns} $rightLastColumn={$rightLastColumn}>
    {children}
  </LogsTable>
}