import React from "react";
import Checkbox from "./Checkbox.component";
import { FormInputProps } from "../FormInput.interface";

export interface CheckboxProps extends FormInputProps<boolean> {
  label: string;
}
