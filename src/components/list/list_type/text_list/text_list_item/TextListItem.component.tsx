import React from "react";
import {
  TextListItemProps,
  TextListItemUIProps,
} from "./TextListItem.interface";
import ListItem from "../../../list_items/list_item/ListItem.component";

function TextListItem(props: TextListItemProps) {
  return (
    <ListItem {...props}>
      {props.data.text}
      {props.data.badge && (
        <span className={"badge badge-" + props.data.badge.color}>
          {props.data.badge.value}
        </span>
      )}
    </ListItem>
  );
}

export default TextListItem;
