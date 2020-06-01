import { ScreenType } from "src/utils/ScreenToSize";

export interface SidePanelProps {
  top?: number;
  screen: ScreenType;
}

export interface SidePanelUIProps extends SidePanelProps {
  setActive: (value: number) => void;
  active: number;
  slide: SlideProps;
  isOpen: boolean;
  toggleOpen: () => void;
}

export interface SidePanelState {
  active: number;
  isSliding: boolean;
  position: number;
  isOpen: boolean;
  toggleOpen: () => void;
}

export interface SlideProps {
  position: number;
  init: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  capture: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  end: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface SidePanelItem {
  name: string;
  icon: string;
  path: string;
}
