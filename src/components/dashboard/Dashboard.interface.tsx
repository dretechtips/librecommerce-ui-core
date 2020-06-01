import { DashboardMenuProps } from "./dashboard_menu/DashboardMenu.interface";

export interface DashboardProps {
  search?: string;
}

export interface DashboardUIProps extends DashboardProps {
  search: string;
  handleSearch: (value: string) => void;
  setActive: (value: number[]) => void;
}

export interface DashboardState {
  search: string;
  active: number[] | null;
}
