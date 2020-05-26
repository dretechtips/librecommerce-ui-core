import DashboardSearch from "./dashboard_search/DashboardSearch.component";
import DashboardMenu from "./dashboard_menu/DashboardMenu.component";
import { DashboardUIProps } from "./Dashboard.interface";

export function Dashboard(props: DashboardUIProps) {
  return (
    <div>
      <DashboardSearch search={props.handleSearch} defaultVal={props.search} />
      <DashboardMenu {...props.menu} />
    </div>
  );
}

export default Dashboard;
