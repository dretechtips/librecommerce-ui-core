import { AxiosResponse } from "axios";
// import {
//   FormInputs,
//   FormInputConditional,
// } from "./form_input/FormInput.interface";
import FormField from "./form_field/FormField.component";
import { NoInfer } from "src/utils/Types";
import { FormFieldProps } from "./form_field/FormField.interface";
import { FormInputProps } from "./form_field/form_input/FormInput.interface";
import { MutableRefObject } from "react";

export interface FormProps {
  /**
   * Path
   */
  postTo?: string;
  title: string;
  children: {
    [key: string]: (
      useField: () => FormInputProps<any>,
      useGroup: () => FormGroupProps
    ) => JSX.Element;
  };
  // fields: Omit<FormFieldsProps<T>, "onInput">;
  // submit?: (value: T) => Promise<AxiosResponse>;
  // inputs?: (value: T) => void;
  note?: string;
  modifier: FormModifier;
  submittable: boolean;
  onSubmit?: (status: FormStatus, res?: AxiosResponse) => void;
  onChange?: (values: { [key: string]: any }) => void;
}

export interface FormState {
  success: boolean;
  error?: string;
  values: { [key: string]: any };
}

export interface FormUIProps extends FormProps {
  setEntryType: (key: string, type: FormEntryType) => void;
  success: boolean;
  error?: string;
  handleChange: (key: string, value: any) => void;
  submit: (ref: MutableRefObject<HTMLDivElement>) => void;
}

export interface FormGroupProps {
  modifier: FormModifier;
  onChange: (values: { [key: string]: any }) => void;
  submitable: boolean;
}

export type FormModifier = "read" | "write";

export enum FormEntryType {
  FIELD,
  GROUP,
}

export type FormStatus = "success" | "failure";

// export type FormQuestionProps = FormInputConditional<FormInputs> & {
//   label: string;
// };

// export interface FormQuestionGroupProps<T> {
//   category: string;
//   questions: NoInfer<FormRelation<Required<T>>>;
// }

export type Primitives =
  | boolean
  | null
  | undefined
  | number
  | bigint
  | string
  | symbol;

// export type FormRelation<T> = {
//   [K in keyof T]: T[K] extends Primitives | Primitives[]
//     ? FormField
//     : FormFieldGroup<T[K]>;
// };

// export type FormCleared<T> = {
//   [K in keyof T]: T[K] extends Primitives | Primitives[]
//     ? undefined
//     : FormCleared<T>;
// };

// export type AsyncForm = {
//   [key: string]: AsyncFormField | AsyncFormFieldGroup;
// };

// export type AsyncFormField = {
//   name: string;
//   type: "Field";
//   value: any;
//   queryable: boolean;
// } & FormInputs;

// export interface AsyncFormFieldGroup {
//   name: string;
//   type: "FieldGroup";
//   fields: AsyncForm;
// }
