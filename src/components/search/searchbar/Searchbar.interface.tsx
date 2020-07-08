import { ButtonProps } from "src/components/button/Button.interface";

export interface SearchbarProps {
  /**
   * Placeholder value
   */
  placeholder: string;
  /**
   * Search function
   */
  search: (value: string) => void;
  /**
   * Input Value
   */
  value?: string;
  /**
   * Additional Buttons
   */
  buttons?: ButtonProps[];
}
