import React from "react";
import { NavPanelProps } from "./NavPanel.interface";
import Navbar from "src/components/nav/navbar/Navbar.component";
import Profile from "src/components/profile/Profile.component";
import Config from "src/api/config/Config.component";

export function NavPanel(props: NavPanelProps) {
  return (
    <Navbar
      leftItems={[
        <React.Fragment>
          <div onClick={props.toggleSide} data-toggle="modal">
            <i className="fas fa-bars text-success fa-fw fa-2x"></i>
          </div>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="navbarPanel"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Config>
            {(config) => (
              <img
                src={config.company.logoURL}
                alt={"Logo"}
                className="ml-3"
                width={"40px"}
              />
            )}
          </Config>
        </React.Fragment>,
      ]}
      rightItems={[<Profile {...props.profile} />]}
    />
  );
}

export default NavPanel;
