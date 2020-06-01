import React from "react";
import { NavItemProps } from "./NavItem.interface";

function NavItem(props: NavItemProps) {
  return (
    <li className="nav-item">
      <a className={"nav-link " + props.isActive ? "active" : ""}>
        {props.value}
      </a>
    </li>
  );
}

export default NavItem;
