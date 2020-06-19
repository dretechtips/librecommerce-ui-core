import React from "react";
import { FormGroupProps } from "./FormGroup.interface";

function FormGroup(props: FormGroupProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <hr />
      {props.children}
    </div>
  );
}

export default FormGroup;
