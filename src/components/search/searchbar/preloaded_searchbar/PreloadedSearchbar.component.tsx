import React from "react";
import List from "src/components/list/List.container";
import Searchbar from "src/components/search/searchbar/Searchbar.component";
import { PreloadedSearchUIProps } from "./PreloadedSearchbar.interface";
import { TextListItemProps } from "src/components/list/list_type/text_list/text_list_item/TextListItem.interface";
import TextListItem from "src/components/list/list_type/text_list/text_list_item/TextListItem.component";
import { ListMode } from "src/components/list";

function PreloadedSearch<T>(props: PreloadedSearchUIProps<T>) {
  return (
    <div>
      <Searchbar placeholder={props.placeholder} search={props.select} />
      <List<TextListItemProps>
        mode={ListMode.READ}
        items={{
          ui: TextListItem,
          get: async () => props.filtered.map((cur) => props.convert(cur)),
        }}
      />
    </div>
  );
}

export default PreloadedSearch;
