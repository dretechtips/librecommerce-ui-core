import React from "react";
import { Link } from "react-router-dom";
import { AppNavItem } from "src/components/app/app_nav/AppNav.interface";

function DashboardIcon(props: AppNavItem) {
  return (
    <Link to={props.path} className="text-secondary col-6 col-sm-4 col-lg-3">
      <div className="p-3 text-center">
        <i className={props.icon + " fa-fw fa-3x mb-3"}></i>
        <br />
        <span>{props.name.trim().replace(/ /gi, "\n")}</span>
      </div>
    </Link>
  );
}

export default DashboardIcon;
