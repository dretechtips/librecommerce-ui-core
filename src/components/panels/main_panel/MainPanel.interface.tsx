import React from "react";
import { RouteComponentProps } from "react-router";

export interface MainPanelProps {
  marginTop?: number;
  marginLeft?: number;
}

export interface MainPanelRoute {
  path: string;
  component: React.ComponentType<
    RouteComponentProps<{ [x: string]: string | undefined }>
  >;
}
