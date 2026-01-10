"use client";

import { ReactSVG } from "react-svg";

interface ImageProps {
  selected?: boolean;
  size?: number;
}

interface PreImageProps extends ImageProps {
  src: string;
}

function preimage({ src, selected, size }: PreImageProps) {
  return <ReactSVG
    src={src}
    beforeInjection={(svg) => {
      svg.setAttribute("fill", selected ? "white" : "black");
      size && svg.setAttribute("width", `${size}`);
      size && svg.setAttribute("height", `${size}`);
    }}
  />
}

export function Logo(props: ImageProps) {
  return preimage({ src: '/logo.svg', ...props });
}

export function Calendar(props: ImageProps) {
  return preimage({ src: '/calendar.svg', ...props });
}

export function People(props: ImageProps) {
  return preimage({ src: '/people.svg', ...props });
}

export function Right(props: ImageProps) {
  return preimage({ src: '/right.svg', ...props });
}

export function Left(props: ImageProps) {
   return preimage({ src: '/left.svg', ...props });
}

export function Log(props: ImageProps) {
  return preimage({ src: '/log.svg', ...props });
}

export function Close(props: ImageProps) {
  return preimage({ src: '/x.svg', ...props }); 
}