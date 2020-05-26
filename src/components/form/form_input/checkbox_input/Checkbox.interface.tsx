import React from "react";
import Checkbox from "./Checkbox.component";

export type CheckboxUIProps = {
  label?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
