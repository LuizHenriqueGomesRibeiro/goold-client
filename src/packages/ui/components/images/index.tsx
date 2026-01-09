"use client"

import CalendarSVG from "@/public/calendar.svg";
import styled, { css } from "styled-components";
import PeopleSVG from "@/public/people.svg";
import LogoSVG from "@/public/logo.svg";
import LogsSVG from "@/public/log.svg";
import colors from "../../themes";

export function Logo() {
  return <LogoSVG />;
}

const PreImageStyle = css<{ $selected?: boolean }>`
  && {
    color: ${({ $selected }) => ($selected ? colors.white : "currentColor")};
    
    path, rect, circle {
      fill: currentColor;
    }
  }
`

const PreCalendar = styled(CalendarSVG)<{ $selected?: boolean }>`
  ${PreImageStyle}
`;

export function Calendar({ selected }: { selected?: boolean }) {
  return <PreCalendar $selected={selected} />
}

const PrePeople = styled(PeopleSVG)<{ $selected?: boolean }>`
  ${PreImageStyle}
`;

export function People({ selected }: { selected?: boolean }) {
  return <PrePeople $selected={selected} />
}

const PreLog = styled(LogsSVG)<{ $selected?: boolean }>`
  ${PreImageStyle}
`;

export function Log({ selected }: { selected?: boolean }) {
  return <PreLog $selected={selected} />
}