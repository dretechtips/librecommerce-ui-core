import React from "react";
import { BarcodeInputUIProps } from "./BarcodeInput.interface";
import Modal from "src/components/modal/Modal.component";
import Alert from "src/components/alert/Alert.component";
import Button from "src/components/button/Button.component";
import List from "src/components/list/List.container";
import TextInput from "../TextInput.container";
import TextListItem from "src/components/list/list_type/text_list/text_list_item/TextListItem.component";
import { TextListItemProps } from "src/components/list/list_type/text_list/text_list_item/TextListItem.interface";
import { ListMode } from "src/components/list";

function BarcodeInput(props: BarcodeInputUIProps): JSX.Element {
  const input: JSX.Element = (
    <TextInput
      {...props}
      example="EAN/UPC/Code_128/Code_39/Code_93/Codabar/i2of5"
      readonly={true}
      append={[
        {
          type: "button",
          text: "SCAN",
          action: props.start,
        },
      ]}
    />
  );
  switch (props.mode) {
    case "standby" || "complete":
      return input;
    case "error":
      return (
        <Modal
          display
          toggle={() => props.exit()}
          title="Unable to scan for barcode!"
          body={
            <Alert
              message={
                props.error
                  ? props.error.message
                  : "There was an error with the barcode scanner."
              }
              theme="danger"
            />
          }
        />
      );
    case "scanning":
      return (
        <Modal
          display
          toggle={() => props.exit()}
          title="Scanning for barcode!"
          body={
            <div className="row">
              <div className="col" ref={(ref) => props.init(ref)}>
                <div
                  style={{ position: "absolute", right: "2rem", top: "2rem" }}
                >
                  <Button
                    icon="fas fa-compress"
                    value="Fullscreen"
                    color="success"
                    onClick={() => props.fullscreen()}
                  />
                </div>
                <video
                  className="w-100"
                  width={window.innerWidth}
                  autoPlay
                  preload="auto"
                  src=""
                  ref={(ref) => props.cameraSetup(ref)}
                />
                <canvas
                  className="drawingBuffer d-none"
                  style={{ position: "absolute", top: 0, left: 0 }}
                ></canvas>
              </div>
            </div>
          }
        />
      );
    case "selecting":
      return (
        <Modal
          display
          toggle={() => props.exit()}
          title="Select Reader Type"
          body={
            <div className="row">
              <div className="col">
                <List<TextListItemProps>
                  mode={ListMode.READ}
                  items={{
                    ui: TextListItem,
                    get: props.options,
                  }}
                />
              </div>
            </div>
          }
        />
      );
    default:
      return input;
  }
}

export default BarcodeInput;
