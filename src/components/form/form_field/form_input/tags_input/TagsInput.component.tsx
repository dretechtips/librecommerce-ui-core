import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { TagsInputUIProps } from "./TagsInput.interface";

function TagsInput(props: TagsInputUIProps) {
  function onChange(value: string) {
    props.onChange?.(value.split(","));
    props.onValid?.(true);
  }

  return (
    <ReactTags
      classNames={{
        selected: "form-row",
        tagInputField: "form-control",
        tagInput: "col-12 col-sm-6 col-md-4",
        tag: "btn btn-outline-success mr-2 mb-2",
        remove: "ml-2",
      }}
      tags={props.tags}
      handleInputChange={onChange}
      handleDelete={props.handleDelete}
      handleDrag={props.handleDrag}
      handleAddition={props.handleAdd}
    />
  );
}

export default TagsInput;
