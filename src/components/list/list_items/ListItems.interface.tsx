import { ListItemProps, ListItemUIProps } from "./list_item/ListItem.interface";
import { ListMode } from "../List.interface";
import * as Bootstrap from "src/utils/Bootstrap";

export interface ListItemsProps<
  D extends ListItemProps,
  U extends ListItemUIProps
> {
  get: (start: number, end: number) => Promise<D[]>;
  toUI: (data: D, props: ListItemUIProps) => U;
  itemUI: React.ComponentType<U>;
}

export interface ListItemsUIProps<
  D extends ListItemProps,
  U extends ListItemUIProps
> extends ListItemsProps<D, U> {
  mode: ListMode;
  selectedIndexes: number[];
  color?: Bootstrap.Colors;
  lazyLoad: () => Promise<D[]>;
}
