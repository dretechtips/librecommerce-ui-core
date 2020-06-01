import { TextInputProps } from "../TextInput.interface";

export interface BarcodeInputState {
  mode: BarcodeInputMode;
  value: string;
  error: Error | null;
  scanType: BarcodeInputType;
}

export interface BarcodeInputProps extends TextInputProps {}

export interface BarcodeInputUIProps extends BarcodeInputProps {
  mode: BarcodeInputMode;
  value: string;
  start: () => void;
  init: (ref: HTMLDivElement | null) => void;
  exit: () => void;
  fullscreen: () => void;
  error: Error | null;
  cameraSetup: (ref: HTMLVideoElement | null) => void;
  updateScanner: (id: BarcodeInputType) => void;
}

export type BarcodeInputMode =
  | "scanning"
  | "complete"
  | "standby"
  | "error"
  | "selecting";

export type BarcodeInputType =
  | "code_128"
  | "ean"
  | "code_39"
  | "codabar"
  | "upc"
  | "i2of5"
  | "code_93";

export interface BarcodeScannerInputProps {
  code?: string;
}
