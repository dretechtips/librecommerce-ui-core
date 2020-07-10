import { ButtonProps } from "src/components/button";
import {
  ListItemProps,
  ListItemUIProps,
} from "../../../list_items/list_item/ListItem.interface";

export interface QueryListItemProps extends ListItemProps {
  description?: string;
  imageURL?: string;
  buttons?: ButtonProps[];
}

export interface QueryListItemUIProps
  extends QueryListItemProps,
    ListItemUIProps {}
