import { ListMode, ListState } from "../../List.interface";
import { ButtonProps } from "src/components/button/Button.interface";
import { ListItemProps } from "../../list_items/list_item";

export interface ListActionProps<T extends ListItemProps> {
  setState: (state: ListState<T>) => void;
  state: ListState<T>;
}

export interface ListActionUIProps<T extends ListItemProps>
  extends ListActionProps<T>,
    ButtonProps {
  displayMode: ListMode[];
}
