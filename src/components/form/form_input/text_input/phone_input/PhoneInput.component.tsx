import { TextInputProps, TextInputValidation } from "../TextInput.interface";
import { PhoneInputProps } from "./PhoneInput.interface";
import TextInput from "../TextInput.container";

export function PhoneInput(props: PhoneInputProps) {
  const verifyDigits: TextInputValidation = {
    handler: (val) => Number.isInteger(Number(val)),
    message: {
      success: "The phone number is a number",
      fail: "The phone number isn't a number",
    },
  };

  const verifyLength: TextInputValidation = {
    handler: (val) => val.length === 11,
    message: {
      success: "The phone number has a correct amount of digits",
      fail:
        "The phone number doesn't have a correct amount of digits. Please make sure phone number has a country code",
    },
  };

  const validations: TextInputValidation[] = [
    verifyDigits,
    verifyLength,
  ].concat(props.validations ? props.validations : []);

  return <TextInput {...props} validations={props.validations} />;
}

export default PhoneInput;
