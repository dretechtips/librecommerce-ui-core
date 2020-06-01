import React from "react";
import { AppUIProps } from "./App.interface";
import { BrowserRouter } from "react-router-dom";
import Login from "../login/Login.container";
import "./App.scss";

export function App(props: AppUIProps) {
  if (props.login) {
    return (
      <BrowserRouter>
        <div className="App">{props.children}</div>
      </BrowserRouter>
    );
  } else {
    return (
      <Login
        loginPath={props.loginPath}
        setLogin={props.setLogin}
        logoPath={props.logoPath}
      />
    );
  }
}

export default App;
