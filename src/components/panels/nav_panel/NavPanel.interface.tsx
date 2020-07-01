import { ProfileProps } from "src/components/profile/Profile.interface";

export interface NavPanelProps {
  profile: ProfileProps;
  toggleSide(): void;
  isOpen: boolean;
}
