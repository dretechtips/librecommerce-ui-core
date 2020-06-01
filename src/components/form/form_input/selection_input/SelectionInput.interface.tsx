import { FormInputProps } from "../FormInput.interface";

export interface SelectionInputProps extends FormInputProps<string | number> {
  options: SelectionOption[];
  sendAs: SelectionSend;
}

export enum SelectionSend {
  INDEX,
  ID,
}

export interface SelectionOption {
  name: string;
  id: string;
}
