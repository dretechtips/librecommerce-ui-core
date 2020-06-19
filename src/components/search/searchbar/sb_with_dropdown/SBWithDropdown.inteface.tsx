export interface SBWithDropdownProps<T> {
  add: string;
  search: (value: string) => Promise<T[]>;
  toResult: (value: T) => SBWithDropdownResult;
}

export interface SBWithDropdownUIProps<T> extends SBWithDropdownProps<T> {
  result: SBWithDropdownResult[];
  processor: (value: string) => void;
  unhighlight: () => void;
  highlight: (index: number) => void;
  highlighted: number;
}

export interface SBWithDropdownState {
  result: SBWithDropdownResult[];
  hovered: number;
}

export interface SBWithDropdownResult {
  title: string;
  description: string;
  image?: string;
  id: string;
}
