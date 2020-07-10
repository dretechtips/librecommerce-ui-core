import * as Bootstrap from "src/utils/Bootstrap";
import {
  ListItemUIProps,
  ListItemProps,
  ListItemDataProps,
} from "../../../list_items/list_item/ListItem.interface";

export interface TextListItemProps
  extends ListItemProps<TextListItemDataProps, TextListItemUIProps> {}

export interface TextListItemDataProps extends ListItemDataProps {
  text: string;
  badge?: {
    color: Bootstrap.Colors;
    value: string;
  };
}

export interface TextListItemUIProps extends ListItemUIProps {}
