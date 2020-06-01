import { FileInputAccess } from "../FileInput.interface";
import { FormInputProps } from "../../FormInput.interface";

export interface PhotoInputProps extends FormInputProps<File[]> {
  photos?: HTMLImageElement[];
  photoLimit?: number;
  /** @description In terms of MB */
  sizeLimit?: number;
}

export interface PhotoInputUIProps extends PhotoInputProps {
  photos: HTMLImageElement[];
  setPhotos: (files: File[]) => void;
  fileInput: FileInputAccess;
}

export interface PhotoInputState {
  photos: HTMLImageElement[];
  size: number;
  remove: number;
}

export interface PhotoInputInputProps {
  photos?: HTMLImageElement[];
}
