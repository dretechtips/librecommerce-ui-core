import React from "react";
import { ProgressProps, ProgressState } from "./Progress.interface";
import ProgressUI from "./Progress.component";

export class Progress extends React.Component<ProgressProps, ProgressState> {
  constructor(props: ProgressProps) {
    super(props);
    this.state = {
      bars: this.props.bars,
    };
  }
  public render() {
    return <ProgressUI {...this.props} />;
  }
}
