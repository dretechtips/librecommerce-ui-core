import React from "react";
import {
  ListItemUIProps,
  ListItemProps,
  ListItemDataProps,
} from "./ListItem.interface";

function ListItem<D extends ListItemDataProps, U extends ListItemUIProps>(
  props: ListItemProps<D, U>
) {
  return (
    <a
      href="javascript:void"
      className={
        "list-group-item " +
        (props.ui.isActive ? "list-group-item-active " : "") +
        (props.ui.color ? "list-group-item-" + props.ui.color + " " : "") +
        (props.ui.onClick ? "list-group-item-action " : "")
      }
    >
      {props.children}
    </a>
  );
}

export default ListItem;
