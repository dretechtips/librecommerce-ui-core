import React from "react";
import { FormInputProps } from "./form_input/FormInput.interface";

export interface FormFieldProps {
  label: string;
  input: (props: FormInputProps<any>) => JSX.Element;
}

export interface FormFieldUIProps {
  id: string;
  label: string;
  input: JSX.Element;
}

export enum FormFieldResult {
  SUCCESS,
  FAILURE,
}
