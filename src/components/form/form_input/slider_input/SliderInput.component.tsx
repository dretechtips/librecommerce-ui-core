import React from "react";
import { SliderInputUIProps } from "./SliderInput.interface";

function SliderInput(props: SliderInputUIProps) {
  return (
    <div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        onInput={props.handleChange}
      />
      <input
        type="text"
        className="form-control"
        readOnly
        value={props.value}
      />
    </div>
  );
}

export default SliderInput;
