import { AxiosResponse } from "axios";
import { FormProps } from "../form";
import { ButtonProps } from "../button";
import { SearchResultProps } from "./search_result/SearchResult.interface";
import { ListItemProps, QueryListItemProps } from "../list";

export interface SearchProps extends FormProps {
  toResult: (object: { [key: string]: any }) => SearchResultProps;
  onResults: (results: SearchResultProps[]) => void;
}

export interface SearchUIProps extends SearchProps {
  toListItem: (result: SearchResultProps) => QueryListItemProps;
  results: SearchResultProps[];
  hasSearched: boolean;
  hasError: boolean;
}

export interface SearchState {
  results: SearchResultProps[];
  hasSearched: boolean;
  hasError: boolean;
}
