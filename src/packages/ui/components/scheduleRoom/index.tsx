"use client";

import styled from "styled-components";
import colors from "../../themes";
import Text from "../text";

const ScheduleRoomComponent = styled.div`
  > div {
    background-color: ${colors.black};
    width: fit-content;
    height: fit-content;
    border-radius: 14px;
    padding: 0 10px;
    height: 27px;
  }
`

export default function ScheduleRoom() {
  return <ScheduleRoomComponent>
    <div>
      <Text type="normal-12" selected>
        Sala <strong>012</strong>
      </Text>
    </div>
  </ScheduleRoomComponent>
}