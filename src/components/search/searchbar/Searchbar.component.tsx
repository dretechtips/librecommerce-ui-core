import React from "react";
import { SearchbarProps, SearchbarUIProps } from "./Searchbar.interface";
import List from "src/components/list/List.container";
import { ListMode } from "src/components/list";
import TextListItem from "src/components/list/list_type/text_list/text_list_item/TextListItem.component";
import QueryListItem from "src/components/list/list_type/query_list/query_list_item/QueryListItem.component";

export function Searchbar(props: SearchbarUIProps): JSX.Element {
  const ref: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          value={props.value}
          className="form-control"
          placeholder={props.placeholder}
          ref={ref}
          onChange={props.onKeypress}
        />
        <div className="input-group-append">
          {!props.autoSearch && (
            <button
              className="input-group-text"
              onClick={() => props.submit(ref.current?.value ?? "")}
            >
              <i className="fas fa-search"></i>
            </button>
          )}
        </div>
      </div>
      <List
        mode={ListMode.READ}
        items={{ ui: QueryListItem, get: async () => props.results }}
      />
    </div>
  );
}

export default Searchbar;
