import { FormEvent } from "react";
import { TextInputProps } from "../text_input/TextInput.interface";
import { FormInputProps } from "../FormInput.interface";

export interface SliderInputProps extends FormInputProps<number> {
  min: number;
  max: number;
}

// export interface SliderInputProps {
//   min: number;
//   max: number;
//   current?: number;
//   append?: string;
//   onUpdate?: (value: number) => void;
// }

// export interface SliderInputUIProps extends SliderInputProps {
//   handleChange: (e: FormEvent<HTMLInputElement>) => void;
//   value: string;
// }

// export interface SliderInputState {
//   current: number;
// }
