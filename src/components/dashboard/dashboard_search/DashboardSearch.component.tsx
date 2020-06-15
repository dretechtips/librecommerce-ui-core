import React from "react";
import { DashboardSearchProp } from "./DashboardSearch.interface";
import Searchbar from "../../search/searchbar/Searchbar.component";

function DashboardSearch(props: DashboardSearchProp) {
  return (
    <Searchbar
      placeholder={"Quickly filter out the menus by typing here."}
      search={props.search}
      value={props.defaultVal}
    />
  );
}

export default DashboardSearch;
