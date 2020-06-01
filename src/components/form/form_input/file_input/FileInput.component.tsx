import React from "react";
import { FileInputUIProps } from "./FileInput.interface";

function FileInput(props: FileInputUIProps) {
  return (
    <div className={"custom-file " + (props.interface ? "d-none" : "")}>
      <input
        className="custom-file-input"
        type="file"
        onChange={props.syncFiles}
        ref={props.interface ? props.interface.set : undefined}
      />
      <label className="custom-file-label">{props.message}</label>
    </div>
  );
}

export default FileInput;
