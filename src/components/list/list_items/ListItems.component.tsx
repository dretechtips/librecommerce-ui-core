import React from "react";
import { Loading } from "src/components/loading";
import { ListItemsProps, ListItemsUIProps } from "./ListItems.interface";
import { ListItemProps, ListItemUIProps } from "./list_item";

function ListItems<D extends ListItemProps, U extends ListItemUIProps>(
  props: ListItemsUIProps<D, U>
) {
  function onClick() {}

  return (
    <Loading>
      {async () => {
        const ListItemUI = props.itemUI;
        const items: D[] = await props.lazyLoad();
        const itemsUI: U[] = items.map((item, index) =>
          props.toUI(item, {
            ...item,
            mode: props.mode,
            isActive: props.selectedIndexes.includes(index),
            color: props.color,
            onClick: onClick,
          })
        );
        return (
          <ul className="list-group">
            {itemsUI.map((item) => (
              <ListItemUI {...item} />
            ))}
          </ul>
        );
      }}
    </Loading>
  );
}

export default ListItems;
