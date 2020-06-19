import { ProfileProps } from "../profile";
import { AppNavGroup } from "../app";

export interface PanelsProps {
  logoURL: string;
  profile: ProfileProps;
  navigation: AppNavGroup[];
}

export interface PanelsUIProps extends PanelsProps, PanelsState {
  toggleSide: () => void;
}

export interface PanelsState {
  side: {
    isOpen: boolean;
  };
}
