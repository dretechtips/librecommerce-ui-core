import React, { useState } from "react";
import { SliderInputProps } from "./SliderInput.interface";

function SliderInput(props: SliderInputProps) {
  const [sliderValue, setSlider] = useState(props.defaultValue);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange?.(event.target.valueAsNumber);
    setSlider(event.target.valueAsNumber);
    props.onValid?.(true);
  }

  return (
    <div>
      <input
        type="range"
        {...props}
        defaultValue={sliderValue}
        min={props.min}
        max={props.max}
        onChange={onChange}
      />
      <input
        type="text"
        className="form-control"
        readOnly
        value={sliderValue}
      />
    </div>
  );
}

export default SliderInput;
