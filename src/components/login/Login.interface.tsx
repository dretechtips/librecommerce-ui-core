import { ProfileProps } from "../profile/Profile.interface";

export interface LoginProps {
  setLogin: (value: boolean, profile?: ProfileProps) => void;
  logoURL: string;
}

export interface LoginState {
  failed: boolean;
}

export interface LoginUIProps extends LoginProps, LoginState {
  loginURL: string;
  login: (username: string, password: string) => void;
}
