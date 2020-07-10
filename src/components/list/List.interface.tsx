import { ListItemProps, ListItemUIProps } from "./list_items/list_item";
import { ButtonProps } from "../button";
import { ListItemsProps } from "./list_items/ListItems.interface";
import { ListActionProps } from "./list_actions/list_action/ListAction.interface";
import * as Bootstrap from "src/utils/Bootstrap";
import { ListActionsProps } from "./list_actions/ListActions.interface";

export interface ListProps<
  D extends ListItemProps = ListItemProps,
  U extends ListItemUIProps = ListItemUIProps
> {
  mode: ListMode;
  page?: number;
  pageSize: number;
  color?: Bootstrap.Colors;

  items: ListItemsProps<D, U>;
  actions: ListActionsProps<D>;

  allowSelect?: boolean;
  onSelect?: (selected: D[]) => void;
  allowMove?: boolean;
  onMove?: (items: D[]) => void;
}

export interface ListUIProps<
  D extends ListItemProps,
  U extends ListItemUIProps
> extends ListProps<D, U> {
  state: ListState<D>;
  setState: (state: ListState<D>) => void;
  lazyLoad: () => Promise<D[]>;
  handlePage: (page: number) => void;
  handleMode: (mode: ListMode) => void;
  handleMove: (from: number, to: number) => void;
  handleSelect: (selected: number[]) => void;
}

export interface ListState<D extends ListItemProps> {
  selectedIndexes: number[];
  items: D[];
  mode: ListMode;
  page: number;
}

export enum ListMode {
  READ = "READ",
  SELECT = "SELECT",
  MOVE = "MOVE",
}
