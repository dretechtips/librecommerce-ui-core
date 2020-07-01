import React from "react";
import { AppUIProps } from "./App.interface";
import { BrowserRouter } from "react-router-dom";
import Login from "../login/Login.container";
import "./App.scss";
import Panels from "../panels/Panels.container";

export function App(props: AppUIProps) {
  const logoURL = window.location.host + "/" + props.logoPath;

  if (props.login) {
    return (
      <BrowserRouter>
        <Panels
          navigation={props.navigation}
          logoURL={logoURL}
          profile={props.profile}
        />
      </BrowserRouter>
    );
  } else {
    return <Login setLogin={props.setLogin} logoURL={logoURL} />;
  }
}

export default App;
