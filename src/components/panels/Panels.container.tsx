import React, { Component } from "react";
import { PanelsProps, PanelsState } from "./Panels.interface";
import PanelsUI from "./Panels.component";

export class Panels extends Component<PanelsProps, PanelsState> {
  constructor(props: PanelsProps) {
    super(props);
    this.state = {
      side: {
        isOpen: false,
      },
    };
  }

  public toggleSide = () => {
    this.setState({
      ...this.state,
      side: { ...this.state.side, isOpen: !this.state.side.isOpen },
    });
  };

  render() {
    return (
      <PanelsUI
        {...this.props}
        side={this.state.side}
        toggleSide={this.toggleSide}
      />
    );
  }
}

export default Panels;
