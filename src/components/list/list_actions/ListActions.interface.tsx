import { ListMode, ListState } from "../List.interface";
import { ListActionProps } from "./list_action/ListAction.interface";
import { ListItemProps } from "../list_items/list_item";
import List from "../List.component";
import { Button } from "src/components/button";

export interface ListActionsProps<D extends ListItemProps> {
  actions: (props: ListActionProps<D>) => JSX.Element[];
}

export interface ListActionsUIProps<D extends ListItemProps>
  extends ListActionsProps<D> {
  state: ListState<D>;
  setState: (state: ListState<D>) => void;
}
