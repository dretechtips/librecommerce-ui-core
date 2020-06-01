import React from "react";
import { DashboardMenuProps } from "./DashboardMenu.interface";
import Card from "../../card/Card.component";
import DashboardIcon from "../dashboard_icon/DashboardIcon.component";

export function DashboardMenu(props: DashboardMenuProps): JSX.Element {
  return (
    <React.Fragment>
      {props.submenus
        .filter((submenu) => new RegExp(props.search, "i").test(submenu.title))
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((cur) => (
          <div className="row mb-3">
            <div className="col-12">
              <Card title={cur.title} theme="success">
                <div className="row">
                  {cur.items
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((icon) => (
                      <DashboardIcon {...icon} />
                    ))}
                </div>
              </Card>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
}

export default DashboardMenu;
