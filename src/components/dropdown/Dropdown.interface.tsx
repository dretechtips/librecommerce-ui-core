import { ButtonProps } from "../button";

export interface DropdownProps {
  value: string;
  items: (DropdownItem | DashboardSplit)[];
}

export interface DropdownItem {
  handler: () => void;
  icon?: string;
  name?: string;
}

export type DashboardSplit = "split";
