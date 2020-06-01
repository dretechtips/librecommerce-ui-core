import { ProfileProps } from "../profile/Profile.interface";
import { ReactChild, ReactNode } from "react";
import { AppNavGroup } from "./app_nav/AppNav.interface";

export interface AppState {
  login: boolean;
  setLogin: (value: boolean, profile?: ProfileProps) => void;
  profile: ProfileProps;
  logoURL: string;
  navigation: AppNavGroup[];
  path: string;
  setPath: (value: string) => void;
}

export interface AppProps {
  onLogin: () => void;
  logoPath: string;
  loginPath: string;
  logoutPath: string;
  requiredLogin: boolean;
  navigation: AppNavGroup[];
}

export interface AppUIProps extends AppProps {
  setLogin: (value: boolean, profile?: ProfileProps) => void;
  login: boolean;
  children?: ReactNode;
}
