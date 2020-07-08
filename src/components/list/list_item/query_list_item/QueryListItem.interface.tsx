import { ButtonProps } from "src/components/button";
import { ListItemProps, ListItemUIProps } from "../ListItem.inteface";

export interface QueryListItemProps extends ListItemUIProps {
  description?: string;
  imageURL?: string;
  buttons?: ButtonProps[];
}
