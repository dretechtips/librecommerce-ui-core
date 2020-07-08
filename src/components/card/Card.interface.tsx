import { ReactChild, ReactNode } from "react";

export interface CardProp {
  theme:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "white";
  title?: string;
  children: ReactNode | ReactNode[];
  className?: string;
  border?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "white";
}

export interface CardUIProps extends CardProp {}

export interface CardState {
  title: string;
}
