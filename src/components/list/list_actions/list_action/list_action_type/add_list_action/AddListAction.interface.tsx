import { ListItemProps } from "src/components/list/list_items/list_item";
import { ListActionProps } from "../../ListAction.interface";

export interface AddListActionProps<T extends ListItemProps>
  extends ListActionProps<T> {
  onAdd?: (items: T[]) => void;
}
