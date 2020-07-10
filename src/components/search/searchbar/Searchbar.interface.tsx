import { ButtonProps } from "src/components/button/Button.interface";
import { ListItemProps } from "src/components/list";
import { SearchResultProps } from "../search_result/SearchResult.interface";

export interface SearchbarProps {
  fetch: (value: string) => Promise<SearchResultProps[]>;
  /**
   * Placeholder value
   */
  placeholder: string;
  /**
   * Search function
   */
  onSearch?: (value: string, results: SearchResultProps[]) => void;
  /**
   * Input Value
   */
  value?: string;
  /**
   * Additional Buttons
   */
  buttons?: ButtonProps[];
  /**
   * Search on keypress
   */
  autoSearch: boolean;
}

export interface SearchbarUIProps extends SearchbarProps {
  results: SearchResultProps[];
  submit: (value: string) => void;
  onKeypress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchbarState {
  results: SearchResultProps[];
}
