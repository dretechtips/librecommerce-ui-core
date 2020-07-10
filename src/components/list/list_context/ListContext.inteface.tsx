import { PaginationProps } from "src/components/pagination";
import { ListMode } from "../List.interface";

export interface ListContextProps {
  page: number;
  setPage: (page: number) => void;
  mode: ListMode;
  handleMode: (mode: ListMode) => void;
}
