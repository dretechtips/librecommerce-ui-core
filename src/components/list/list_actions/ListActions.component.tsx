import React, { useState } from "react";
import { ListActionsProps, ListActionsUIProps } from "./ListActions.interface";
import { ListMode } from "../List.interface";
import { ListItemProps } from "../list_items/list_item";
import { ListActionUIProps } from "./list_action/ListAction.interface";

function ListActions<D extends ListItemProps>(props: ListActionsUIProps<D>) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex justify-content-between mb-2">
          {props.actions({
            ...props,
          })}
        </div>
      </div>
    </div>
  );
}

export default ListActions;
