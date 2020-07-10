import React from "react";
import { RemoveListActionProps } from "./RemoveListAction.interface";
import { ListItemProps } from "src/components/list/list_items/list_item";
import ListAction from "../../ListAction.component";
import { ListMode } from "src/components/list/List.interface";

function RemoveListAction<T extends ListItemProps>(
  props: RemoveListActionProps<T>
) {
  function handleDelete() {
    const state = props.state;
    const nextItems = state.items.filter((cur, index) =>
      state.selectedIndexes.includes(index)
    );
    props.setState({
      ...state,
      items: nextItems,
    });
    props.onDelete?.(nextItems);
  }

  return (
    <ListAction
      {...props}
      displayMode={[ListMode.SELECT]}
      icon={"fas fa-trash"}
      value={"Remove"}
      color={"danger"}
      onClick={handleDelete}
    />
  );
}

export default RemoveListAction;
