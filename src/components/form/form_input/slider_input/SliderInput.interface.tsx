import { FormEvent } from "react";

export interface SliderInputProps {
  min: number;
  max: number;
  current?: number;
  append?: string;
  onUpdate?: (value: number) => void;
}

export interface SliderInputUIProps extends SliderInputProps {
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  value: string;
}

export interface SliderInputState {
  current: number;
}
