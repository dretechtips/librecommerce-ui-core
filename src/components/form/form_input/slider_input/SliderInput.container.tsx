import React, { Component } from "react";
import { SliderInputProps, SliderInputState } from "./SliderInput.interface";
import SliderUI from "./SliderInput.component";

export class SliderInput extends Component<SliderInputProps, SliderInputState> {
  constructor(props: SliderInputProps) {
    super(props);
    this.state = {
      current: this.props.current
        ? this.props.current >= this.props.min &&
          this.props.current <= this.props.max
          ? this.props.current
          : this.getDefaultValue()
        : this.getDefaultValue(),
    };
  }
  private getDefaultValue(): number {
    return Math.round((this.props.min + this.props.max) / 2);
  }
  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, current: e.currentTarget.valueAsNumber });
    this.props.onUpdate
      ? this.props.onUpdate(e.currentTarget.valueAsNumber)
      : undefined;
  };
  render() {
    return (
      <SliderUI
        {...this.props}
        handleChange={this.handleChange}
        value={
          this.state.current + (this.props.append ? this.props.append : "")
        }
      />
    );
  }
}

export default SliderInput;
