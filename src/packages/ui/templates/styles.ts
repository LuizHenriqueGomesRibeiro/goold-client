"use client";

import styled from "styled-components";

export const SystemCommonTemplateComponent = styled.div`
  height: 100vh;
  overflow: hidden;

  > section {
    margin: 100px auto 0 auto;
    height: calc(100vh - 100px);
    overflow-y: auto;
    padding: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
  }
`