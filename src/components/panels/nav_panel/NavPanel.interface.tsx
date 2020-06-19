import { ProfileProps } from "src/components/profile/Profile.interface";

export interface NavPanelProps {
  logoURL: string;
  profile: ProfileProps;
  toggle(): void;
  isOpen: boolean;
}
