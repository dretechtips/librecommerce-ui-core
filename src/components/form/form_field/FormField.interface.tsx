import React from "react";
import { FormInputProps } from "./form_input/FormInput.interface";

export interface FormFieldProps {
  label: string;
  input: React.ComponentType<FormInputProps<any>>;
}

export interface FormFieldUIProps {
  label: string;
  input: JSX.Element;
}
