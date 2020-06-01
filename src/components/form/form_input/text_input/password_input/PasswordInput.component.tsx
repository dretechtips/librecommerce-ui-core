import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faKey } from "@fortawesome/free-solid-svg-icons";
import { PasswordInputProps } from "./PasswordInput.interface";
import { TextInputValidation } from "../TextInput.interface";
import TextInput from "../TextInput.container";

function PasswordInput(props: PasswordInputProps) {
  const tooLong: TextInputValidation = {
    handler: (val) => !(val.length > 25),
    message: {
      success: "Password is long enough",
      fail: "Password is too long",
    },
  };

  const tooShort: TextInputValidation = {
    handler: (val) => !(val.length < 6),
    message: {
      success: "Password is short enough",
      fail: "Password is too short",
    },
  };

  const noCapitalChar: TextInputValidation = {
    handler: (val) =>
      val
        .split("")
        .filter((cur) => cur.charCodeAt(0) > 64 && cur.charCodeAt(0) < 91)
        .length > 0,
    message: {
      success: "Password has at least one capital letter",
      fail: "Password doesn't have at least one capital letter",
    },
  };

  const noSpecialChar: TextInputValidation = {
    handler: (val) =>
      val.split("").filter((cur) => cur.match(/[\W_]+/)).length > 0,
    message: {
      success: "Password has at least one special letter",
      fail: "Password doesn't have at least one spcialc letter",
    },
  };

  const validations: TextInputValidation[] = [
    tooLong,
    tooShort,
    noCapitalChar,
    noSpecialChar,
  ].concat(props.validations ? props.validations : []);

  return <TextInput {...props} validations={validations} />;
}

export default PasswordInput;
