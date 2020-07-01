import React, { Component } from "react";
import LoginUI from "./Login.component";
import { LoginProps, LoginState } from "./Login.interface";

export class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      failed: false,
    };
  }
  public login = (username: string, password: string) => {
    // Make Http Request to Server
    this.props.setLogin(!this.state.failed);
  };

  public base64(username: string, password: string) {
    return btoa(username + ":" + password);
  }
  public render() {
    return (
      <LoginUI
        {...this.props}
        loginURL={window.location.host + "/api/account/login"}
        login={this.login}
        failed={this.state.failed}
      />
    );
  }
}

export default Login;
