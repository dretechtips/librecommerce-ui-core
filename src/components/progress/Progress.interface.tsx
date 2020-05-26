import { ProgressbarProps } from "./progressbar/Progressbar.interface";

export interface ProgressProps {
  handleBars(index: number, barVal: number);
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
