import React from "react";
import {
  TextInputProps,
  TextInputState,
  TextInputMessage,
} from "./TextInput.interface";
import TextInputUI from "./TextInput.component";

export class TextInput extends React.Component<TextInputProps, TextInputState> {
  constructor(props: TextInputProps) {
    super(props);
    this.state = {
      messages: [],
    };
    this.validation.bind(this);
  }

  public validation(value: string): void {
    const validation: TextInputMessage[] = this.props.validations
      ?.map((cur) => cur.handler(value))
      .map((status, index) => {
        return {
          isValid: status,
          message: status
            ? this.props.validations[index].validMsg
            : this.props.validations[index].invalidMsg,
        };
      });
    if (validation) {
      this.setState({
        ...this.state,
        messages: validation,
      });
      this.props.isReady(
        validation.filter((cur) => cur.isValid).length ===
          this.props.validations.length
      );
    }
  }

  public render() {
    return <TextInputUI {...this.props} messages={this.state.messages} />;
  }
}

export default TextInput;
