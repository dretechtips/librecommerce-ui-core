import { FormInputProps } from "../../FormInput.interface";

export interface DateRangeInputProps
  extends FormInputProps<DateRangeInputProps> {}

export type DateRangeInputEvent = {
  start: React.FormEvent<HTMLInputElement> | null;
  end: React.FormEvent<HTMLInputElement> | null;
};

export interface DateRangeInputProps {
  start?: Date;
  end?: Date;
}
