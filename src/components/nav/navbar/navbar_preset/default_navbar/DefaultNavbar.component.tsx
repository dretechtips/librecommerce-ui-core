import React from "react";
import { DefaultNavbarProps } from "./DefaultNavbar.interface";
import Navbar from "../../Navbar.container";
import Profile from "src/components/profile/Profile.component";

function DefaultNavbar(props: DefaultNavbarProps) {
  return (
    <Navbar
      dashboardPath={props.dashboardPath}
      leftItems={[<img src={props.logoURL} />]}
      rightItems={[<Profile {...props.profile} />]}
    />
  );
}

export default DefaultNavbar;
