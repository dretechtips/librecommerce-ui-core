export interface SelectionInputProps {
  defaultIndex: number;
  options: SelectionOption[];
  sendAs: SelectionSend;
}

export enum SelectionSend {
  INDEX,
  ID,
}

export interface SelectionOption {
  name: string;
  id: string;
}
