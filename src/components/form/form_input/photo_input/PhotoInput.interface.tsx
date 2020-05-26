import { FileInputAccess } from "../file_input/FileInput.interface";

export interface PhotoInputProps {
  input?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
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
