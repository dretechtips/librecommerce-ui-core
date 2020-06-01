import React from "react";
import { EmailInputProps } from "./EmailInput.interface";
import TextInput from "../TextInput.container";
import { TextInputValidation } from "../TextInput.interface";

function EmailInput(props: EmailInputProps) {
  const at: TextInputValidation = {
    handler: (val) => val.indexOf("@") !== -1,
    message: {
      success: "The email address has an @",
      fail: "There is @ within the email address",
    },
  };

  const domain: TextInputValidation = {
    handler: (val) => val.search(/@.*\./) !== -1,
    message: {
      success: "The email address has a domain",
      fail: "There is no domain within the email address",
    },
  };

  const extension: TextInputValidation = {
    handler: (val) => val.search(/\..+/) !== -1,
    message: {
      success: "The email address has no extension",
      fail: "There is extension within the email address",
    },
  };

  const validations = props.validations
    ? props.validations.concat([at, domain, extension])
    : [];

  return <TextInput {...props} validations={validations} />;
}

export default EmailInput;
