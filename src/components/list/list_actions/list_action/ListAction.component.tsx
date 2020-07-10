import React from "react";
import { ListActionProps, ListActionUIProps } from "./ListAction.interface";
import { ListItemProps } from "../../list_items/list_item";
import { Button } from "src/components/button";

function ListAction<T extends ListItemProps>(props: ListActionUIProps<T>) {
  return (
    <Button
      {...props}
      className={
        "mr-2 " + !props.displayMode.includes(props.state.mode) ? "d-none" : ""
      }
    />
  );
}

export default ListAction;
