import React from "react";
import { ListUIProps, ListMode } from "./List.interface";
import Button from "src/components/button/Button.component";
import Dropdown from "../dropdown/Dropdown.component";
import Modal from "../modal/Modal.component";
import Pagination from "../pagination/Pagination.container";
import { Loading } from "../loading";
import { ListItemProps } from "./list_item";

function List<T extends ListItemProps>(props: ListUIProps<T>) {
  return (
    <div>
      <div className="row">
        {/* List Action Bar */}
        <div className="col-12">
          <div className="d-flex justify-content-between mb-2">
            {props.mode === ListMode.READ && (
              <React.Fragment>
                {props.allowAdd && (
                  <Button
                    className="mr-2"
                    icon="fas fa-plus"
                    value="Add"
                    color="primary"
                    onClick={() => {}}
                  />
                )}
              </React.Fragment>
            )}
            {props.allowSelect && props.mode === ListMode.SELECT && (
              <React.Fragment>
                {props.allowDelete && (
                  <Button
                    className="mr-2"
                    icon="fas fa-minus"
                    value="Delete"
                    color="primary"
                    onClick={() => props.handleDelete()}
                  />
                )}
              </React.Fragment>
            )}
            {props.allowMove && props.mode === ListMode.MOVE && (
              <React.Fragment></React.Fragment>
            )}
            {props.actions?.filter((action) =>
              action.mode.includes(props.mode)
            )}
          </div>
        </div>
      </div>

      {/* List Items */}
      <Loading>
        {async () => {
          const ListItemUI = props.items.ui;
          const items = await props.lazyLoad();
          return (
            <ul className="list-group">
              {items.map((item) => (
                <ListItemUI
                  {...item}
                  mode={props.mode}
                  isActive={false}
                  color={"primary"}
                />
              ))}
            </ul>
          );
        }}
      </Loading>

      {/* List Context Bar */}
      <div>
        <Pagination current={props.page} setPage={props.setPage} />
        <Dropdown
          value={props.mode}
          items={Object.values(props.mode)
            .filter((value) => value != props.mode)
            .map((value) => {
              return {
                name: value,
                handler: () => props.handleMode(value as ListMode),
              };
            })}
        />
      </div>
    </div>
  );
}

export default List;
