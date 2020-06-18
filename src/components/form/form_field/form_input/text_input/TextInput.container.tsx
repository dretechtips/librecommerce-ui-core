import React from "react";
import {
  TextInputProps,
  TextInputState,
  TextInputMessage,
  TextInputValidation,
} from "./TextInput.interface";
import TextInputUI from "./TextInput.component";

export class TextInput extends React.Component<TextInputProps, TextInputState> {
  constructor(props: TextInputProps) {
    super(props);
    this.state = {
      validations: this.props.validations ? this.props.validations : [],
      beenClicked: false,
    };
    this.validation = this.validation.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  public validation(value: string): void {
    const validations: TextInputValidation[] = this.props.validations
      ? this.props.validations
          .map((cur) => cur.handler(value))
          .map((status, index) => {
            return {
              ...(this.props.validations as TextInputValidation[])[index],
              isValid: status,
            };
          })
      : [];
    if (validations) {
      this.setState({
        ...this.state,
        validations: validations,
      });
      if (
        validations.filter((cur) => !cur.isValid).length === 0 &&
        this.props.onValid
      )
        this.props.onValid(true);
    }
  }

  public onClick() {
    if (!this.state.beenClicked)
      this.setState({
        ...this.state,
        beenClicked: true,
      });
  }

  public render() {
    return (
      <TextInputUI
        {...this.props}
        validations={this.state.validations}
        onClick={this.onClick}
        beenClicked={this.state.beenClicked}
      />
    );
  }
}

export default TextInput;
