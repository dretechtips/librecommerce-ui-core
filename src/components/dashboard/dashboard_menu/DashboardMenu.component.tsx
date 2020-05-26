import { DashboardMenuProps } from "./DashboardMenu.interface";
import Card from "../../card/Card.component";
import DashboardIcon from "../dashboard_icon/DashboardIcon.component";

export function DashboardMenu(props: DashboardMenuProps) {
  return props.submenus
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((cur) => (
      <div className="row mb-3">
        <div className="col-12">
          <Card title={cur.title} theme="success">
            <div className="row">
              {cur.icons
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((icon) => (
                  <DashboardIcon {...icon} basePath={cur.basePath} />
                ))}
            </div>
          </Card>
        </div>
      </div>
    ));
}

export default DashboardMenu;
