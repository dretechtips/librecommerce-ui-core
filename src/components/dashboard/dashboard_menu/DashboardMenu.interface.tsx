import { DashboardProps } from "../Dashboard.interface";
import { DashboardIconProps } from "../dashboard_icon/DashboardIcon.interface";

export interface DashboardMenuProps {
  submenus: DashboardSubmenuProps[];
  search?: string;
}

export interface DashboardSubmenuProps {
  icons: DashboardIconProps[];
  basePath: string;
  title: string;
}
