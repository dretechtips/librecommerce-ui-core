import React from "react";
import DashboardSearch from "./dashboard_search/DashboardSearch.component";
import DashboardMenu from "./dashboard_menu/DashboardMenu.component";
import { DashboardUIProps } from "./Dashboard.interface";
import App from "../app/App.container";

export function Dashboard(props: DashboardUIProps) {
  return (
    <App.contextType.Consumer>
      {(app) => (
        <React.Fragment>
          <DashboardSearch
            search={props.handleSearch}
            defaultVal={props.search}
          />
          <DashboardMenu search={props.search} submenus={app.navigation} />
        </React.Fragment>
      )}
    </App.contextType.Consumer>
  );
}

export default Dashboard;
