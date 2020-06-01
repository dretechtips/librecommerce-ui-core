import React from "react";
import { NavDropdownProps } from "./NavDropdown.interface";

function NavDropdown(props: NavDropdownProps) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="#"
        role="button"
      >
        {props.children}
      </a>
      <div className="dropdown-menu">
        {props.children.menu.map((cur) =>
          cur ? (
            <a className="dropdown-item">{cur}</a>
          ) : (
            <div className="dropdown-divider"></div>
          )
        )}
      </div>
    </li>
  );
}

export default NavDropdown;
