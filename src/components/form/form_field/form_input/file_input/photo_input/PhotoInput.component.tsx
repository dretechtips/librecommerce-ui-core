import React from "react";
import FileInput from "../FileInput.container";
import { PhotoInputUIProps } from "./PhotoInput.interface";
import PhotoViewer from "src/components/viewer/photo_viewer/PhotoViewer.container";
import { FileInputProps } from "../FileInput.interface";

function PhotoInput(props: PhotoInputUIProps) {
  return (
    <div>
      <PhotoViewer
        photos={props.photos}
        add={props.fileInput.toggle}
        remove={props.fileInput.remove.set}
      />
      <FileInput
        {...props}
        message="Please upload pictures"
        allowedFileTypes={[
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/tiff",
          "image/bmp",
        ]}
        interface={props.fileInput}
      />
    </div>
  );
}

export default PhotoInput;
