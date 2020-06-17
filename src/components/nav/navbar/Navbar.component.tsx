import { NavbarProps } from "./Navbar.interface";
import React from "react";
import SidePanel from "src/components/panels/side_panel/SidePanel.container";
import App from "src/components/app/App.container";

export function Navbar(props: NavbarProps) {
  return (
    <nav
      style={{
        top: 0,
        zIndex: 8888,
        maxHeight: 56,
      }}
      className="w-100 navbar navbar-expand navbar-light bg-light border-bottom border-success position-fixed"
    >
      <div className="collapse navbar-collapse" id="navbarPanel">
        <ul className="navbar-nav mr-auto">
          {props.leftItems
            ? props.leftItems.map((cur) => {
                return (
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {cur}
                    </a>
                  </li>
                );
              })
            : ""}
        </ul>
        <ul className="navbar-nav ml-auto">
          {props.rightItems
            ? props.rightItems.map((cur) => {
                return (
                  <li className="nav-item">
                    <a href="javascript:void" className="nav-link">
                      {cur}
                    </a>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
