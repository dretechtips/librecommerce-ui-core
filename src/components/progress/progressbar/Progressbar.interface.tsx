import * as Bootstrap from "../../../utils/Bootstrap";

export interface ProgressbarProps {
  value: number;
  name: string;
  bgColor: Bootstrap.Colors;
}

export interface ProgressbarUIProps extends ProgressbarProps {
  prefix?: string;
  suffix?: string;
  displayValue?: boolean;
  hasStripes?: boolean;
  maxValue: number;
}
