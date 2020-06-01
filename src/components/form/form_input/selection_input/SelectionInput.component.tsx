import React, { useState } from "react";
import { SelectionInputProps, SelectionSend } from "./SelectionInput.interface";

export function SelectionInput(props: SelectionInputProps) {
  const [index, setIndex] = useState(
    Number.isInteger(Number(props.defaultValue))
      ? Number(props.defaultValue)
      : 0
  );

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (props.sendAs === SelectionSend.ID) props.onChange?.(event.target.value);
    if (props.sendAs === SelectionSend.INDEX)
      props.onChange?.(event.target.selectedIndex);
    setIndex(event.target.selectedIndex);
    props.onValid?.(true);
  }

  return (
    <select className="custom-select" onChange={onChange}>
      {props.options.map((cur, i) => (
        <option
          selected={i === index}
          disabled={i !== index && props.readonly}
          value={cur.id}
        >
          {cur.name}
        </option>
      ))}
    </select>
  );
}

export default SelectionInput;
