export interface PaginationProps {
  setPage: (page: number) => void;
  total?: number;
  current?: number;
}

export interface PaginationUIProps extends PaginationProps {
  current: number;
  toNext: () => void;
  toPrev: () => void;
  toPage: (page: number) => void;
}

export interface PaginationState {
  current: number;
}
