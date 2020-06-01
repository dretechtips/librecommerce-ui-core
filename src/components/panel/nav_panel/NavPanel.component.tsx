import React from "react";
import { NavPanelProps } from "./NavPanel.interface";
import DefaultNavbar from "src/components/nav/navbar/navbar_preset/default_navbar/DefaultNavbar.component";

export function NavPanel(props: NavPanelProps) {
  return <DefaultNavbar {...props} />;
}

export default NavPanel;
