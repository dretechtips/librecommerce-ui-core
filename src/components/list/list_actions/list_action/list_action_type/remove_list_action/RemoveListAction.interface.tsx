import { ListActionProps, ListActionUIProps } from "../../ListAction.interface";
import { ListItemProps } from "src/components/list/list_items/list_item";

export interface RemoveListActionProps<T extends ListItemProps>
  extends ListActionProps<T> {
  onDelete?: (items: T[]) => void;
}
