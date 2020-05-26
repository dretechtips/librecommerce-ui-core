import { ProfileProps } from "../profile/Profile.interface";
import { ReactChild, ReactNode } from "react";

export interface AppState {
  login: boolean;
  profile: ProfileProps;
  logoURL: string;
}

export interface AppProps {
  logoURL: string;
}

export interface AppUIProps extends AppProps {
  login: boolean;
  children?: ReactNode;
}
