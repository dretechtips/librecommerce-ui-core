import React from "react";
import { TextListItemProps } from "./TextListItem.interface";
import ListItem from "../ListItem.component";

function TextListItem(props: TextListItemProps) {
  return (
    <ListItem {...props}>
      {props.text}
      {props.badge && (
        <span className={"badge badge-" + props.badge.color}>
          {props.badge.value}
        </span>
      )}
    </ListItem>
  );
}

export default TextListItem;
