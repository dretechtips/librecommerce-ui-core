import React, { Component } from "react";
import {
  SBWithDropdownProps,
  SBWithDropdownState,
  SBWithDropdownResult,
} from "./SBWithDropdown.inteface";
import SBWithDropdownUI from "./SBWithDropdown.component";

export class SBWithDropdown<T extends {}> extends Component<
  SBWithDropdownProps<T>,
  SBWithDropdownState
> {
  constructor(props: SBWithDropdownProps<T>) {
    super(props);
    this.state = {
      result: [],
      hovered: -1,
    };
  }
  process = async (value: string): Promise<void> => {
    if (value === "") {
      this.setState({ ...this.state, result: [] });
      return;
    }
    const result: T[] = await this.props.search(value);
    this.setState({
      ...this.state,
      result: result.map((cur) => this.props.toResult(cur)),
    });
    return;
  };
  highlight = (index: number) => {
    this.setState({ ...this.state, hovered: index });
  };
  unhighlight = () => {
    this.setState({ ...this.state, hovered: -1 });
  };
  render() {
    return (
      <SBWithDropdownUI<T>
        {...this.props}
        unhighlight={this.unhighlight}
        highlighted={this.state.hovered}
        highlight={this.highlight}
        result={this.state.result}
        processor={this.process}
      />
    );
  }
}

export default SBWithDropdown;
