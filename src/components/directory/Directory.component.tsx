import React from "react";
import { DirectoryUIProps, DirectorySchemaType } from "./Directory.interface";
import Pagination from "../pagination/Pagination.container";
import Table from "../table/Table.container";
import Searchbar from "../search/searchbar/Searchbar.component";

function Directory<T extends DirectorySchemaType<any>>(
  props: DirectoryUIProps<T>
) {
  return (
    <div>
      <Searchbar placeholder="Directory Lookup" search={props.filter} />
      <Table
        head={props.display[0] ? Object.keys(props.display[0]) : []}
        items={
          props.display[0] ? props.display.map((cur) => Object.values(cur)) : []
        }
      />
      <Pagination size={props.paginationSize} toPage={props.toPage} />
    </div>
  );
}

export default Directory;
