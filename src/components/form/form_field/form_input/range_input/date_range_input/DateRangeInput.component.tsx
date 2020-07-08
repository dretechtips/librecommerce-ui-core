import React, { useState } from "react";
import { DateRangeInputProps } from "./DateRangeInput.interface";

function DateRangeInput(props: DateRangeInputProps) {
  const [start, setStart] = useState<undefined | Date>(undefined);
  const [end, setEnd] = useState<undefined | Date>(undefined);

  props.onChange?.({ start, end });

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Start Date"
            onInput={(e) => setStart(e.currentTarget.valueAsDate ?? undefined)}
            value={props.start ? props.start.toString() : undefined}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="End Date"
            onInput={(e) => setEnd(e.currentTarget.valueAsDate ?? undefined)}
            value={props.start ? props.start.toString() : undefined}
          />
        </div>
      </div>
    </div>
  );
}

export default DateRangeInput;
