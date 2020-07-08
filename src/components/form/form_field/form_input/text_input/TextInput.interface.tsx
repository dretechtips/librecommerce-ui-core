import React from "react";
import Button from "src/components/button/Button.component";
import { ButtonProps } from "src/components/button/Button.interface";
import { FormInputProps } from "../FormInput.interface";

/**
 * @typedef T Invalid State
 */
export interface TextInputUIProps extends TextInputProps {
  onClick: () => void;
  beenClicked: boolean;
}

export interface TextInputProps extends FormInputProps<string> {
  example: string;
  validations?: TextInputValidation[];
  append?: TextInputAddon[];
  prepend?: TextInputAddon[];
}

export interface TextInputState {
  validations: TextInputValidation[];
  beenClicked: boolean;
}

export interface TextInputValidation {
  /**
   * @returns {true} It has passed the validation
   * @returns {false} It has failed the validation
   */
  handler: (value: string) => boolean;
  message: TextInputMessage;
  isValid?: boolean;
}

export type TextInputAddon =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "button";
      text: string;
      action: () => void;
    };

export interface TextInputMessage {
  success: string;
  fail: string;
}

export type TextInputValidity<T extends {}> = {
  [K in keyof T]: TextInputMessage;
};

// export interface TextInputProps {
//   value?: string;
//   placeholder?: string;
// }

// export interface CheckboxInputProps {
//   value?: boolean;
// }

// export interface TextAreaInputProps {
//   rows?: number;
//   value?: string;
//   placeholder?: string;
// }

// export interface TextAreaListInputProps extends TextAreaInputProps {
//   list?: "ol" | "ul";
// }

// export interface SelectInputProps {
//   option?: string[];
//   selected?: number;
// }

// export interface DateInputProps {
//   date?: Date;
// }
