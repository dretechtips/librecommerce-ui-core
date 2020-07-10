import React from "react";
import { ListUIProps, ListMode } from "./List.interface";
import { ListItemProps, ListItemUIProps } from "./list_items/list_item";
import ListItems from "./list_items/ListItems.component";
import ListContext from "./list_context/ListContext.component";
import ListActions from "./list_actions/ListActions.component";

function List<D extends ListItemProps, U extends ListItemUIProps>(
  props: ListUIProps<D, U>
) {
  return (
    <div>
      <ListActions
        {...props.actions}
        state={props.state}
        setState={props.setState}
      />

      <ListItems
        {...props.items}
        color={props.color}
        lazyLoad={props.lazyLoad}
        mode={props.state.mode}
        selectedIndexes={props.state.selectedIndexes}
      />

      <ListContext
        page={props.state.page}
        setPage={props.handlePage}
        mode={props.state.mode}
        handleMode={props.handleMode}
      />
    </div>
  );
}

export default List;
