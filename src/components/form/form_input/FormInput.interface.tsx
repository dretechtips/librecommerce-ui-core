export interface FormInputProps<
  T extends string | number | boolean | string[] | number[] | boolean[] | File[]
> {
  onChange?: (value: T) => void;
  onValid?: (value: boolean) => void;
  defaultValue: T;
  readonly?: boolean;
}

// export type FormInputProps = {
//   modifier: FormModifier;
//   question: FormQuestionProps;
//   node: string;
//   parent: string | null;
//   onInput?: (node: string, parent: string | null, value: any) => void;
// };

// export type FormInputType<T extends NoRequired<T>, D extends string> = {
//   props?: T extends never ? undefined : T;
//   input: D;
// };

// export type FormInputs =
//   | FormInputType<TextInputProps, "text" | "address" | "email" | "password">
//   | FormInputType<CheckboxInputProps, "checkbox">
//   | FormInputType<TextAreaInputProps, "textarea">
//   | FormInputType<TextAreaListInputProps, "textarea-list">
//   | FormInputType<SelectInputProps, "select">
//   | FormInputType<DateInputProps, "date">
//   | FormInputType<BarcodeScannerInputProps, "barcode">
//   | FormInputType<FileUploadInputProps, "file">
//   | FormInputType<PhotoUploadInputProps, "photo">
//   | FormInputType<TagsBoxInputProps, "tagsbox">
//   | FormInputType<DateRangeInputProps, "date-range">
//   | FormInputType<SliderInputProps, "slider">;
