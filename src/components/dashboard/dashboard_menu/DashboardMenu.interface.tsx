import { DashboardProps } from "../Dashboard.interface";
import { DashboardIconProps } from "../dashboard_icon/DashboardIcon.interface";
import { AppNavGroup } from "src/components/app/app_nav/AppNav.interface";

export interface DashboardMenuProps {
  search: string;
  submenus: AppNavGroup[];
}
