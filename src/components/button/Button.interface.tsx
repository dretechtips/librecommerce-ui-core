export interface ButtonProps {
  value: string;
  color: ButtonColor;
  onClick: (...args: any) => void;
  icon?: string;
  hasOutline?: boolean;
  size?: "sm" | "lg";
  active?: boolean;
  disabled?: boolean;
  className?: string;
}

export type ButtonColor =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";
