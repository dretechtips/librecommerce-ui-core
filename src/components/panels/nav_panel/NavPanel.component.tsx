import React from "react";
import { NavPanelProps } from "./NavPanel.interface";
import Navbar from "src/components/nav/navbar/Navbar.component";
import Profile from "src/components/profile/Profile.component";

export function NavPanel(props: NavPanelProps) {
  return <Navbar 
  leftItems={[<React.Fragment>
    <div onClick={props.sideToggle} data-toggle="modal">
      <i className="fas fa-bars text-success fa-fw fa-2x"></i>
    </div>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="navbarPanel"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <img
      src={props.logoURL}
      alt="Logo"
      className="ml-3"
      width="40px"
    />
  </React.Fragment>]} 
  rightItems={[<Profile {...props.profile} />]}  />;
}

export default NavPanel;
