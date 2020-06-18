import React from "react";
import {
  BarcodeInputUIProps,
  BarcodeInputType,
} from "./BarcodeInput.interface";
import Modal from "src/components/modal/Modal.component";
import Alert from "src/components/alert/Alert.component";
import Button from "src/components/button/Button.component";
import List from "src/components/list/List.container";
import TextInput from "../TextInput.container";

function BarcodeInput(props: BarcodeInputUIProps): JSX.Element {
  const input: JSX.Element = (
    <TextInput
      {...props}
      example="EAN/UPC/Code_128/Code_39/Code_93/Codabar/i2of5"
      readOnly={true}
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
                    action={() => props.fullscreen()}
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
                <List
                  items={{
                    elements: [
                      { value: "EAN", id: "ean" },
                      { value: "UPC", id: "upc" },
                      { value: "CODE 128", id: "code_128" },
                      { value: "CODE 39", id: "code_39" },
                      { value: "CODE 93", id: "code_93" },
                      { value: "CODABAR", id: "codabar" },
                      { value: "I2 OF 5", id: "i2of5" },
                    ],
                    actions: [
                      {
                        name: "Select",
                        icon: "fas fa-check-circle",
                        func: (id) =>
                          props.updateScanner(id as BarcodeInputType),
                      },
                    ],
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
