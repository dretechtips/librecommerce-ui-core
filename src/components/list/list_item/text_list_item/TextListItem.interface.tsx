import * as Bootstrap from "src/utils/Bootstrap";
import { ListItemProps, ListItemUIProps } from "../ListItem.inteface";

export interface TextListItemProps extends ListItemUIProps {
  text: string;
  badge?: {
    color: Bootstrap.Colors;
    value: string;
  };
}
