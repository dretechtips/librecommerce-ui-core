import React, { Component } from "react";
import { NavbarProps } from "./Navbar.interface";
import NavbarUI from "./Navbar.component";

export class Navbar extends Component<NavbarProps> {
  render() {
    return <NavbarUI {...this.props} />;
  }
}

export default Navbar;
