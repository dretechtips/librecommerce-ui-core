import React from "react";
import { PanelsUIProps } from "./Panels.interface";
import NavPanel from "./nav_panel/NavPanel.component";
import SidePanel from "./side_panel/SidePanel.container";
import MainPanel from "./main_panel/MainPanel.component";

function Panels(props: PanelsUIProps) {
  return (
    <div>
      <NavPanel
        logoURL={props.logoURL}
        profile={props.profile}
        toggle={props.toggleSide}
        isOpen={props.side.isOpen}
      />
      <SidePanel logoURL={props.logoURL} navigation={props.navigation} />
      <MainPanel />
    </div>
  );
}

export default Panels;
