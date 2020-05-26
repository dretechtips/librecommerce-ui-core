import { ProgressProps } from "./Progress.interface";
import Progressbar from "./progressbar/Progressbar.component";

export function Progress(props: ProgressProps) {
  return (
    <div
      className="progress"
      style={props.heightInPixels ? { height: props.heightInPixels } : {}}
    >
      {props.bars.map((cur) => (
        <Progressbar
          {...cur}
          maxValue={props.total}
          displayValue={props.displayValue}
          hasStripes={props.hasStripes}
          prefix={props.prefix}
          suffix={props.suffix}
        />
      ))}
    </div>
  );
}

export default Progress;
