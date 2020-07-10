import * as Bootstrap from "src/utils/Bootstrap";
import { ListMode } from "../../List.interface";

export interface ListItemProps {
  id: string;
  name?: string;
  creationDate?: string;
  popularity?: number;
}

export interface ListItemUIProps extends ListItemProps {
  onClick: () => void;
  isActive: boolean;
  color?: Bootstrap.Colors;
  mode: ListMode;
}
