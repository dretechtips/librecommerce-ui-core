import React from "react";
import FileInput from "../file_input/FileInput.container";
import { PhotoInputUIProps } from "./PhotoInput.interface";
import PhotoViewer from "../../../viewer/photo_viewer/PhotoViewer.container";
import { FileInputProps } from "../file_input/FileInput.interface";

function PhotoInput(props: PhotoInputUIProps) {
  return (
    <div>
      <PhotoViewer
        photos={props.photos}
        add={props.fileInput.toggle}
        remove={props.fileInput.remove.set}
      />
      <FileInput
        input={props.input}
        message="Please upload pictures"
        allowedFileTypes={[
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/tiff",
          "image/bmp",
        ]}
        onFilesSync={props.setPhotos}
        interface={props.fileInput}
      />
    </div>
  );
}

export default PhotoUpload;
