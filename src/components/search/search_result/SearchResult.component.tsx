import React from "react";
import { SearchResultProps } from "./SearchResult.interface";
import ListItem from "src/components/list/list_item/ListItem.component";
import QueryListItem from "src/components/list/list_item/query_list_item/QueryListItem.component";

function SearchResult(props: SearchResultProps) {
  return <QueryListItem {...props} />;
}

export default SearchResult;
