import { AppUIProps } from "./App.interface";
import { BrowserRouter } from "react-router-dom";
import Login from "../login/Login.container";
import "./App.scss";

export function App(prop: AppUIProps) {
  if (prop.login) {
    return (
      <BrowserRouter>
        <div className="App">{prop.children}</div>
      </BrowserRouter>
    );
  } else {
    return <Login loginApp={this.login} logoURL={this.props.logoURL} />;
  }
}

export default App;
