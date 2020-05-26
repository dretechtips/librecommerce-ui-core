import { PopperChildrenProps } from "react-popper";

export interface PopoverProps {
  header?: string;
  body: JSX.Element[] | JSX.Element;
  popper: PopperChildrenProps;
}
