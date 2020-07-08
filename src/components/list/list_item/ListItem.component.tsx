import React from "react";
import { ListItemUIProps } from "./ListItem.inteface";

function ListItem(props: ListItemUIProps) {
  return (
    <a
      href="javascript:void"
      className={
        "list-group-item " +
        (props.isActive ? "list-group-item-active " : "") +
        (props.color ? "list-group-item-" + props.color + " " : "") +
        (props.onClick ? "list-group-item-action " : "")
      }
    >
      {props.children}
    </a>
  );
}

export default ListItem;
