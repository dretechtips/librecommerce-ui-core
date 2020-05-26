import { DashboardMenuProps } from "./dashboard_menu/DashboardMenu.interface";

export interface DashboardProps {
  search?: string;
  menu: DashboardMenuProps;
}

export interface DashboardUIProps extends DashboardProps {
  handleSearch: (value: string) => void;
}

export interface DashboardState {
  search: string;
  display: DashboardMenuProps;
}
