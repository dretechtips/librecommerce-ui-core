import React from "react";
import { DropdownProps } from "./Dropdown.interface";
import { Link, Router } from "react-router-dom";

function Dropdown(props: DropdownProps) {
  return (
    <div className="dropdown">
      <span className="dropdown-toggle" data-toggle="dropdown">
        {props.value}
      </span>
      <div className="dropdown-menu dropdown-menu-right">
        {props.items.map((cur) => {
          if (cur === "split") return <div className="dropdown-divider"></div>;
          else
            return (
              <a className="dropdown-item" onClick={cur.handler}>
                {cur.icon ? <i className={cur.icon + " mr-2"}></i> : ""}
                {cur.name ? cur.name : ""}
              </a>
            );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
