import { FormModifier, FormQuestionProps } from "./Form.interface";
import {
  TextInputProps,
  CheckboxInputProps,
  TextAreaInputProps,
  TextAreaListInputProps,
  SelectInputProps,
  DateInputProps,
} from "./Input.interface";
import { BarcodeScannerInputProps } from "./BarcodeScannerBox.interface";
import { FileUploadInputProps } from "./FileUpload.interface";
import { PhotoUploadInputProps } from "./PhotoUpload.interface";
import { TagsBoxInputProps } from "./Tagsbox.interface";
import { DateRangeInputProps } from "./DateRangeInput.interface";
import { SliderInputProps } from "./Slider.interface";
import { NoRequired } from "../utils/Types";

export interface FormInputProps<
  T extends string | number | boolean | string[]
> {
  onChange: (value: T) => void;
  isReady: (value: boolean) => void;
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
