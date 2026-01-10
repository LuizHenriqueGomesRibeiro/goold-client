import styled, { css } from "styled-components";
import colors from "../../themes";
import Text from "../text";

const analysing = css`
  border: 1px solid ${colors["strong-grey"]};
  background: ${colors.grey};

  > span {
    color: ${colors["dark-grey"]} !important;
  }
`

const scheduled = css`
  border: 1px solid ${colors["strong-green"]};
  background: ${colors.green};

  > span {
    color: ${colors["strong-green"]} !important;
  }
`

const canceled = css`
  border: 1px solid ${colors["strong-red"]};
  background: ${colors.red};

  > span {
    color: ${colors["colored-red"]} !important;
  }
`

const ScheduleTransationComponent = styled.div<{ element: number }>`
  > div {
    ${({ element }) => {
      if (element === 1) return scheduled;
      else if (element === 2) return canceled;
      return analysing;
    }};

    justify-content: center;
    align-items: center;
    height: fit-content;
    width: fit-content;
    display: flex;
    border-radius: 100px;
    padding: 5px 15px;
    gap: 5px;
  }
`

function produceText(element: number): string {
  if (element === 1) return 'Agendado';
    else if (element === 2) return 'Cancelado';
    return 'Em análise';
}

export default function ScheduleTransation({ element }: { element: number }) {
  return <ScheduleTransationComponent element={element}>
    <div>
      <Text type="normal-12">{produceText(element)}</Text>
    </div>
  </ScheduleTransationComponent>
}