import { FormInputProps } from "../FormInput.interface";

export interface FileInputProps extends FormInputProps<File[]> {
  /**
   * @description Limit is in terms of MB
   */
  limit?: number;
  message: string;
  allowedFileTypes?: string[];
  interface?: FileInputAccess;
}

export interface FileInputUIProps extends FileInputProps {
  syncFiles: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FileInputState {
  files: File[];
  /**
   *  @description Size in terms of MB
   */
  size: number;
  message: string;
}

export interface FileInputAccess {
  set: (ref: HTMLInputElement) => void;
  toggle: () => void;
  remove: FileInputRemove;
}

export interface FileInputRemove {
  set: (index: number) => void;
  get: () => number;
  clear: () => void;
}

// export interface FileUploadInputProps {
//   files?: File[];
// }
