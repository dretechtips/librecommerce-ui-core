export interface FormInputProps<
  T extends
    | string
    | number
    | boolean
    | string[]
    | number[]
    | boolean[]
    | File[]
    | { [key: string]: any }
> {
  onChange?: (value: T) => void;
  onValid?: (value: boolean) => void;
  defaultValue?: T;
  readonly?: boolean;
}
