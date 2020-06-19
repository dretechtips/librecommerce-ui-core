import React from "react";
import List from "src/components/list/List.container";
import Searchbar from "src/components/search/searchbar/Searchbar.component";
import { PreloadedSearchUIProps } from "./PreloadedSearchbar.interface";

function PreloadedSearch<T>(props: PreloadedSearchUIProps<T>) {
  return (
    <div>
      <Searchbar placeholder={props.placeholder} search={props.select} />
      <List
        items={{ elements: props.filtered.map((cur) => props.convert(cur)) }}
      />
    </div>
  );
}

export default PreloadedSearch;
