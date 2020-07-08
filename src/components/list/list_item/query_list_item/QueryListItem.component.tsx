import React from "react";
import { QueryListItemProps } from "./QueryListItem.interface";
import ListItem from "../ListItem.component";
import { Button } from "src/components/button";

function QueryListItem(props: QueryListItemProps) {
  return (
    <ListItem {...props}>
      <div className="row">
        {props.imageURL && (
          <div className="col-md-3">
            <img className="img-fluid" alt="Query Img" src={props.imageURL} />
          </div>
        )}
        <div className={props.imageURL ? "col-md-9" : "col-md-12"}>
          <div className="d-flex justify-content-around">
            <h5 className="text-bold">{props.name ?? "No Name"}</h5>
            {props.creationDate && (
              <h5 className="text-muted">{props.creationDate}</h5>
            )}
          </div>

          {props.description && <h5>{props.description}</h5>}
          <div className="d-flex">
            {props.buttons?.map((button) => (
              <Button className="mr-2" {...button} />
            ))}
          </div>
        </div>
      </div>
    </ListItem>
  );
}

export default QueryListItem;
