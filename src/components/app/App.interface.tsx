import { ProfileProps } from "../profile/Profile.interface";
import { AppNavGroup } from "./app_nav/AppNav.interface";

export interface AppState {
  profile: ProfileProps;
  logoURL: string;
  navigation: AppNavGroup[];
  path: string;
  setPath: (value: string) => void;

  login: boolean;
  /**
   * @param value success
   * @param profile Account Profile
   */
  setLogin: (value: boolean, profile?: ProfileProps) => void;
  /**
   * @param url logout url
   */
  setLogout: (url: string) => void;
}

export interface AppProps {
  onLogin: () => void;
  logoPath: string;
  requiredLogin: boolean;
  navigation: AppNavGroup[];
}

export interface AppUIProps extends AppProps {
  profile: ProfileProps;
  setLogin: (value: boolean, profile?: ProfileProps) => void;
  setLogout: (url: string) => void;
  login: boolean;
}
