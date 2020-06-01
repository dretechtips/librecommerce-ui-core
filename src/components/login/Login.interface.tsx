import { ProfileProps } from "../profile/Profile.interface";

export interface LoginProps {
  loginPath: string;
  logoPath: string;
  setLogin: (value: boolean, profile?: ProfileProps) => void;
}

export interface LoginState {
  failed: boolean;
}

export interface LoginUIProps {
  logoPath: string;
  failed: boolean;
  login: (username: string, password: string) => void;
}
