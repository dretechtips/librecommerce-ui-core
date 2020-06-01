import { AxiosResponse } from "axios";
import {
  FormInputs,
  FormInputConditional,
} from "./form_input/FormInput.interface";
import { FormField } from "./form_field/FormField.container";
import FormFieldGroup from "./form_group/FormGroup.container";
import { NoInfer } from "src/utils/types";
import { FormFieldsProps } from "./form_field/FormField.container";

export interface FormProps<T> {
  /**
   * Path
   */
  to: string;
  title: string;
  fields: Omit<FormFieldsProps<T>, "onInput">;
  submit?: (value: T) => Promise<AxiosResponse>;
  inputs?: (value: T) => void;
  note?: string;
}

export interface FormState<T> {
  success: boolean;
  error?: string;
  values: { [K in keyof T]: any };
}

export interface FormUIProps<T>
  extends Omit<FormProps<T>, "submit">,
    Omit<FormState<T>, "values"> {
  onInput: (node: string, parent: string | null, value: any) => void;
  submit?: () => Promise<void>;
}

export type FormModifier = "read" | "write";

export type FormQuestionProps = FormInputConditional<FormInputs> & {
  label: string;
};

export interface FormQuestionGroupProps<T> {
  category: string;
  questions: NoInfer<FormRelation<Required<T>>>;
}

export type Primitives =
  | boolean
  | null
  | undefined
  | number
  | bigint
  | string
  | symbol;

export type FormRelation<T> = {
  [K in keyof T]: T[K] extends Primitives | Primitives[]
    ? FormField
    : FormFieldGroup<T[K]>;
};

export type FormCleared<T> = {
  [K in keyof T]: T[K] extends Primitives | Primitives[]
    ? undefined
    : FormCleared<T>;
};

export type AsyncForm = {
  [key: string]: AsyncFormField | AsyncFormFieldGroup;
};

export type AsyncFormField = {
  name: string;
  type: "Field";
  value: any;
  queryable: boolean;
} & FormInputs;

export interface AsyncFormFieldGroup {
  name: string;
  type: "FieldGroup";
  fields: AsyncForm;
}
