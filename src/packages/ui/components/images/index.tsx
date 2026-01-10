"use client"

import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";
import CalendarSVG from "@/assets/calendar.svg";
import PeopleSVG from "@/public/people.svg";
import RightSVG from "@/public/right.svg";
import LeftSVG from "@/public/left.svg";
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

export function Calendar({ selected, size }: { selected?: boolean, size?: number }) {
  return <ReactSVG
    src='/calendar.svg'
    beforeInjection={(svg) => {
      svg.setAttribute("fill", selected ? "white" : "black");
      size && svg.setAttribute("width", `${size}`);
      size && svg.setAttribute("height", `${size}`);
    }}
  />
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

export function Right() {
  return <RightSVG/>
}

export function Left() {
  return <LeftSVG/>
}

export function Log({ selected }: { selected?: boolean }) {
  return <PreLog $selected={selected} />
}