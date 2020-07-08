import { ListItemProps, ListItemUIProps } from "./list_item";
import { ButtonProps } from "../button";
import QueryListItem from "./list_item/query_list_item/QueryListItem.component";

export interface ListProps<T extends ListItemProps> {
  mode: ListMode;
  page?: number;
  items: ListItem<T>;
  actions?: ListAction<T>[];

  /**
   * @param add Invoke this to add an item to the list
   * @returns {JSX.Element} Modal Child Element
   */
  allowAdd?: (useAdd: (items: T[]) => void) => JSX.Element;
  onAdd?: (items: T[]) => void;

  allowDelete?: boolean;
  onDelete?: (selected: T[]) => void;

  allowSelect?: boolean;
  onSelect?: (selected: T[]) => void;

  allowMove?: boolean;
  onMove?: (items: T[]) => void;

  readonly?: boolean;
}

export interface ListUIProps<T extends ListItemProps> extends ListProps<T> {
  setPage: (page: number) => void;
  lazyLoad: () => Promise<T[]>;
  selectedIndexes: number[];
  handleMode: (mode: ListMode) => void;
  handleSelect: (indexes: number[]) => void;
  handleDelete: () => void;
  useAdd: (items: T[]) => void;
}

export interface ListState<T extends ListItemProps> {
  page: number;
  items: T[];
  mode: ListMode;
  selectedIndexes: number[];
}

export enum ListMode {
  READ = "READ",
  SELECT = "SELECT",
  MOVE = "MOVE",
}

export interface ListAction<T extends ListItemProps> extends ButtonProps {
  mode: ListMode[];
  state?: ListState<T>;
  onClick: (state: ListState<T>) => void;
}

export interface ListAdd {
  /**
   * Used to render a ui that can
   */
  ui: (add: (items: ListItemProps[]) => void) => JSX.Element;
}

export interface ListItem<T extends ListItemProps> {
  get: (
    startIndex: number,
    endIndex: number
  ) => Promise<Omit<T, keyof Omit<ListItemUIProps, keyof ListItemProps>>[]>;
  ui: React.ComponentType<T & ListItemUIProps>;
}
