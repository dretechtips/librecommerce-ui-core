import { ProgressbarProps } from "./progressbar/Progressbar.interface";

export interface ProgressProps {
  bars: ProgressbarProps[];
  total: number;
  prefix?: string;
  suffix?: string;
  displayValue?: boolean;
  hasStripes?: boolean;
  heightInPixels?: number;
}

export interface ProgressState {
  bars: ProgressbarProps[];
}
