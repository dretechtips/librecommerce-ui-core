import React, { Component, MutableRefObject, ErrorInfo } from "react";
import FormUI from "./Form.component";
import { FormProps, FormState, FormEntryType } from "./Form.interface";
import { Tree, Leaf, Branch } from "src/data/Tree";
import FormField from "./form_field/FormField.component";
import { IS_DEBUG } from "src/env";
import { v4 as uuid } from "uuid";
import { scrollToTop } from "src/utils/Elements";
import { FormSubmissionFailureException } from "./Form.exceptions";

/**
 * @todo Fix the broken inital state of nested form objects
 * @todo Fix the broken changed state of nested form objects
 */

export class Form extends Component<FormProps, FormState> {
  private readonly entryTypes: Map<string, FormEntryType> = new Map();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      error: undefined,
      success: false,
      values: {},
    };
    this.entryTypes = new Map();
    if (IS_DEBUG) console.log("Form inital state", this.state.values);
  }

  private setEntryType = (key: string, type: FormEntryType) => {
    this.entryTypes.set(key, type);
  };

  public handleChange = (key: string, value: any) => {
    const values = { ...this.state, key: value };
    this.setState({
      ...this.state,
      values,
    });
    this.props.onChange?.(values);
  };

  private setFieldDefaultValue() {
    Object.keys(this.props.children).forEach((key) => {
      if (this.entryTypes.get(key) === FormEntryType.FIELD)
        this.handleChange(key, undefined);
    });
  }

  public submit = async (
    ref: MutableRefObject<HTMLDivElement>
  ): Promise<void> => {
    try {
      scrollToTop(ref);
      const url = this.props.postTo;
      // Make HTTP Request

      this.props.onSubmit?.("success");
    } catch (e) {
      console.error("Form has failed to send! Debugging info");
      throw new FormSubmissionFailureException();
    }
    // if (this.props.submit) {
    //   const submit = this.props.submit(this.state.values);
    //   this.setState({ ...this.state });
    //   const result = await submit;
    //   if (result.data.error)
    //     this.setState({
    //       ...this.state,
    //       error: result.data.error as string,
    //     });
    //   else
    //     this.setState({
    //       ...this.state,
    //       success: true,
    //       error: undefined,
    //     });
    // } else {
    //   this.setState({
    //     ...this.state,
    //     error: "Cannot send a form with invalid or empty values.",
    //   });
    // }
  };

  public componentDidMount() {
    // If the form already loaded the field types then set the field values
    if (Object.keys(this.state.values).length === 0)
      this.setFieldDefaultValue();
  }

  public componentDidUpdate() {
    if (IS_DEBUG) console.log("Form New State", this.state.values);
    this.props.onChange?.(this.state.values);
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    if (IS_DEBUG) {
      console.error("Form State", this.state);
      console.error("Form Props", this.props);
    }
    if (error instanceof FormSubmissionFailureException) {
      this.setState({
        ...this.state,
        success: false,
        error: error.message,
      });
      this.props.onSubmit?.("failure");
    }
  }

  public render() {
    return (
      <FormUI
        {...this.props}
        setEntryType={this.setEntryType}
        handleChange={this.handleChange}
        submit={this.submit}
        success={this.state.success}
        error={this.state.error}
      />
    );
  }
}

export default Form;
