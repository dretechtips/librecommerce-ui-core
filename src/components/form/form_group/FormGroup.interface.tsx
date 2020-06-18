import { FormFieldProps } from "../form_field/FormField.interface";

export interface FormGroupProps {
  title: string;
  children: { [K: string]: FormFieldProps };
}
