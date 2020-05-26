import { SelectionInputProps } from "./SelectionInput.interface";

export function SelectionInput(props: SelectionInputProps) {
  return (
    <select className="custom-select">
      {props.options.map((cur) => (
        <option value={cur.id}>{cur.name}</option>
      ))}
    </select>
  );
}

export default SelectionInput;
