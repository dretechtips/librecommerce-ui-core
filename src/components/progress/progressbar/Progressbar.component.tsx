import { ProgressbarProps, ProgressbarUIProps } from "./Progressbar.interface";

function Progressbar(props: ProgressbarUIProps) {
  return (
    <div
      className={"progress-bar " + (props.bgColor ? "bg-" + props.bgColor : "")}
      style={{ width: (props.value * 100) / props.maxValue + "%" }}
    >
      {props.displayValue && (
        <span>
          {(props.prefix ? props.prefix : "") +
            (props.displayValue ? props.value : props.name) +
            (props.suffix ? props.suffix : "")}
        </span>
      )}
    </div>
  );
}

export default Progressbar;
