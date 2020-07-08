import React, { ComponentType, Component } from "react";
import Quagga from "quagga";
import {
  BarcodeInputState,
  BarcodeInputProps,
  BarcodeInputType,
} from "./BarcodeInput.interface";
import BarcodeInputUI from "./BarcodeInput.component";
import { TextListItemProps, ListItem } from "src/components/list";

class BarcodeInput extends Component<BarcodeInputProps, BarcodeInputState> {
  private options: ListItem<TextListItemProps>["get"] = async () =>
    [
      { text: "EAN", id: "ean" },
      { text: "UPC", id: "upc" },
      { text: "CODE 128", id: "code_128" },
      { text: "CODE 39", id: "code_39" },
      { text: "CODE 93", id: "code_93" },
      { text: "CODABAR", id: "codabar" },
      { text: "I2 OF 5", id: "i2of5" },
    ].map((item) => {
      return {
        ...item,
        onClick: () => this.updateScanner(item.id as BarcodeInputType),
      };
    });

  cameraView: HTMLDivElement | null;
  camera: HTMLVideoElement | null;
  constructor(props: BarcodeInputProps) {
    super(props);
    this.state = {
      mode: "standby",
      value: this.props.defaultValue ?? "",
      error: null,
      scanType: "upc",
    };
    this.cameraView = null;
    this.camera = null;
  }
  public readerAdapter(): string {
    switch (this.state.scanType) {
      case "ean":
        return "ean_reader";
      case "upc":
        return "upc_reader";
      case "code_128":
        return "code_128_reader";
      case "code_39":
        return "code_39_reader";
      case "code_93":
        return "code_93_reader";
      case "codabar":
        return "codebar_reader";
      case "i2of5":
        return "i2of5_reader";
      default:
        throw new TypeError("Invalid Scan Type");
    }
  }
  public start = () => {
    this.setState({ ...this.state, mode: "selecting" });
  };
  init = (ref: HTMLDivElement | null): void => {
    if (ref === null) return;
    this.cameraView = ref;
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: this.cameraView!,
        },
        decoder: {
          readers: [this.readerAdapter()],
        },
      },
      (err) => {
        if (err) {
          this.componentDidCatch(err);
          return;
        }
        Quagga.start();
        Quagga.onDetected((cur) => {
          if (this.state.mode !== "complete") {
            alert("Captured");
            Quagga.stop();
            this.setState({
              ...this.state,
              mode: "complete",
              value: cur.codeResult.code,
            });
          }
        });
      }
    );
  };
  public cameraSetup = (ref: HTMLVideoElement | null) => {
    if (ref === null) return;
    this.camera = ref;
  };
  public fullscreen = () => {
    if (!this.camera) return;
    if (this.camera.requestFullscreen) this.camera.requestFullscreen();
    else if (typeof (this.camera as any).webkitEnterFullScreen === "function")
      (this.camera as any).webkitEnterFullScreen();
  };
  public updateScanner = (id: BarcodeInputType) => {
    this.setState({ ...this.state, scanType: id, mode: "scanning" });
  };
  public exit = () => {
    Quagga.stop();
    this.setState({ ...this.state, mode: "standby" });
  };
  public componentDidCatch(error: Error) {
    this.setState({ ...this.state, mode: "error", error: error });
  }
  public render() {
    return (
      <BarcodeInputUI
        {...this.props}
        options={this.options}
        updateScanner={this.updateScanner}
        cameraSetup={this.cameraSetup}
        fullscreen={this.fullscreen}
        mode={this.state.mode}
        value={this.state.value}
        start={this.start}
        init={this.init}
        exit={this.exit}
        error={this.state.error}
      />
    );
  }
}

export default BarcodeInput;
