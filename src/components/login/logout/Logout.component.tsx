import React, { useContext } from "react";
import App from "src/components/app/App.container";
import { LogoutProps } from "./Logout.interface";

function Logout(props: LogoutProps) {
  return (
    <App.contextType.Consumer>
      {(value) => {
        value.setLogout(window.location.host + "/api/account/logout");
        return props.children;
      }}
    </App.contextType.Consumer>
  );
}

export default Logout;
