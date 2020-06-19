import React, { Component } from "react";
import { PanelsProps, PanelsState } from "./Panels.interface";
import PanelsUI from "./Panels.component";

export class Panels extends Component<PanelsProps, PanelsState> {
  constructor(props: PanelsState) {
    super(props);
    this.state = {
      side: {
        open: false,
      },
    };
  }

  render() {
    return <PanelsUI {...this.props} />;
  }
}

export default Panels;
