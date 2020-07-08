import { ListItem, ListItemAction } from "src/components/list/List.interface";
import { TextListItemProps } from "src/components/list";
import { SearchbarProps } from "../Searchbar.interface";

export interface PreloadedSearchProps<T> extends SearchbarProps {
  get: () => Promise<T[]>;
  items: T[];
  convert: (data: T) => ListItem<TextListItemProps>["get"];
  actions?: ListItemAction[];
}

export interface PreloadedSearchUIProps<T> extends PreloadedSearchProps<T> {
  filtered: T[];
  selectedID: string | null;
  select: (id: string) => void;
  filter: (value: string) => void;
}

export interface PreloadedSearchState<T> {
  filtered: T[];
  selectedID: string | null;
}
