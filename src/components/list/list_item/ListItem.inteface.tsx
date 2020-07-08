import * as Bootstrap from "src/utils/Bootstrap";
import { ListMode } from "../List.interface";

export interface ListItemProps {
  onClick?: () => void;

  id: string;
  name?: string;
  creationDate?: string;
  popularity?: number;
  children?: React.ReactNode;
}

export interface ListItemUIProps extends ListItemProps {
  isActive: boolean;
  color: Bootstrap.Colors;
  mode: ListMode;
}
