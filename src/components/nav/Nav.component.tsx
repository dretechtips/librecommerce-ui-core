import React from "react";
import { NavProps } from "./Nav.interface";

export function Nav(props: NavProps) {
  return (
    <ul
      className={
        "nav " +
        (props.presentation && "nav-" + props.presentation) +
        (props.fill && "nav-fill")
      }
    >
      {props.children}
    </ul>
  );
}

export default Nav;
