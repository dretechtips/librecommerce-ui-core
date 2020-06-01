import React, { useContext } from "react";
import App from "src/components/app/App.container";
import { LogoutProps } from "./Logout.interface";

function Logout(props: LogoutProps) {
  return (
    <App.contextType.Consumer>
      {(value) => {
        value.setLogin(false);
        return props.children;
      }}
    </App.contextType.Consumer>
  );
}

export default Logout;
