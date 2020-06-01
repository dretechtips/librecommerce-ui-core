import React from "react";

export interface NavDropdownProps {
  children: NavDropdownChildren;
}

export interface NavDropdownChildren {
  button: string | JSX.Element;
  menu: (JSX.Element | undefined)[];
}
