import React from "react";
import Card from "src/components/card/Card.component";
import { SearchUIProps } from "src/components/search/Search.interface";
import List from "src/components/list/List.container";
import Form from "../form/Form.container";
import Alert from "../alert/Alert.component";
import QueryListItem from "../list/list_type/query_list/query_list_item/QueryListItem.component";
import { QueryListItemProps } from "src/components/list/list_type/query_list/query_list_item/QueryListItem.interface";
import { ListMode } from "../list";

function Search(props: SearchUIProps) {
  if (props.hasSearched)
    return (
      <Card theme={props.hasError ? "danger" : "success"}>
        {props.hasError ? (
          <Alert
            theme="danger"
            message={
              "The server was unable to process the search form. Please try again later!"
            }
          />
        ) : (
          <Alert
            theme="success"
            message={
              "The server successfully processed the form and returned results!"
            }
          />
        )}
        {!props.hasError && (
          <List<QueryListItemProps>
            mode={ListMode.READ}
            items={{
              ui: QueryListItem,
              get: async () => props.results.map(props.toListItem),
            }}
          />
        )}
      </Card>
    );

  return <Form {...props} />;
}

export default Search;
