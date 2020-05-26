import { FormLabelProp } from "./FormLabel.interface";

export function FormLabel(prop: FormLabelProp) {
  return <label>{prop.label}</label>;
}

export default FormLabel;
