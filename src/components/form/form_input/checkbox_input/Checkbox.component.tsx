import React from "react";
import { CheckboxProps } from "./Checkbox.interface";

function Checkbox(props: CheckboxProps) {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange?.(event.target.checked);
    // Update this for extension purpose
    props.onValid?.(event.target.checked);
  }

  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        defaultChecked={props.defaultValue}
        readOnly={props.readonly}
        onChange={onChange}
      />
      {props.label && (
        <label className="custom-control-label">{props.label}</label>
      )}
    </div>
  );
}

export default Checkbox;
