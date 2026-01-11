"use client";

import styled from "styled-components";

export const SystemCommonTemplateComponent = styled.div`
  overflow: hidden;

  > section {
    height: calc(100vh - 100px);
    margin-top: 100px;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    display: flex;
  }
`