import React from "react";
import { FormFieldProps, FormFieldUIProps } from "./FormField.interface";
import FormLabel from "./form_label/FormLabel.component";

function FormField(props: FormFieldUIProps) {
  return (
    <div className="form-group">
      <FormLabel label={props.label} />
      {props.input}
    </div>
  );
}

export default FormField;
