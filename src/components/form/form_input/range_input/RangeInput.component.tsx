import React from "react";
import { RangeInputProps, RangeInputState } from "./RangeInput.interface";

export function RangeInput(props: RangeInputProps) {
  return (
    <div className="row">
      <div className="form-group col-6">
        <input
          type="number"
          className="form-control w-100"
          placeholder={props.unit + " MIN"}
        />
      </div>
      <div className="form-group col-6">
        <input
          type="number"
          className="form-control w-100"
          placeholder={props.unit + " MAX"}
        />
      </div>
    </div>
  );
}
