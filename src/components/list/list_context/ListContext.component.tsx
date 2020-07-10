import React from "react";
import { ListContextProps } from "./ListContext.inteface";
import Pagination from "src/components/pagination/Pagination.container";
import Dropdown from "src/components/dropdown/Dropdown.component";
import { ListMode } from "../List.interface";

function ListContext(props: ListContextProps) {
  return (
    <div>
      <Pagination {...props} current={props.page} />
      <Dropdown
        value={props.mode}
        items={Object.values(props.mode)
          .filter((value) => value !== props.mode)
          .map((value) => {
            return {
              name: value,
              handler: () => props.handleMode(value as ListMode),
            };
          })}
      />
    </div>
  );
}

export default ListContext;
