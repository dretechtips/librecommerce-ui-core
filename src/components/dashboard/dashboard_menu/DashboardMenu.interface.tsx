import { DashboardProps } from "../Dashboard.interface";
import { AppNavGroup } from "src/components/app/app_nav/AppNav.interface";

export interface DashboardMenuProps {
  search: string;
  submenus: AppNavGroup[];
}
