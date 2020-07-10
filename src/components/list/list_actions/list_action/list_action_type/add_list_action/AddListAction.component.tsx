import React from "react";
import { ListActionProps } from "../../ListAction.interface";
import { ListItemProps } from "src/components/list/list_items/list_item";
import { AddListActionProps } from "./AddListAction.interface";
import ListAction from "../../ListAction.component";
import { ListMode } from "src/components/list/List.interface";

function AddListAction<T extends ListItemProps>(props: AddListActionProps<T>) {
  return (
    <ListAction
      {...props}
      mode={[ListMode.READ]}
      icon={"fas fa-plus"}
      value={"Add"}
      color={"success"}
      onClick={() => {}}
    />
  );
}

export default AddListAction;
