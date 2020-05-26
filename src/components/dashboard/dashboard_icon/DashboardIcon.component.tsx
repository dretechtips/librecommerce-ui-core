import { Link } from "react-router-dom";
import { DashboardIconProps } from "./DashboardIcon.interface";

function DashboardIcon(props: DashboardIconProps) {
  return (
    <Link
      to={props.basePath + props.path}
      className="text-secondary col-6 col-sm-4 col-lg-3"
    >
      <div className="p-3 text-center">
        <i className={props.icon + " fa-fw fa-3x mb-3"}></i>
        <br />
        <span>{props.name.trim().replace(/ /gi, "\n")}</span>
      </div>
    </Link>
  );
}

export default DashboardIcon;
