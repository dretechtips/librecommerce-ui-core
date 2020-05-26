import React, { Component } from "react";
import { AppState, AppProps } from "./App.interface";
import AppUI from "./App.component";

export class App extends Component<AppProps, AppState> {
  static defaultState: AppState = {
    login: false,
    profile: {
      username: "Loading...",
      name: "Loading...",
      imageURL: "https://via.placeholder.com/40x40",
    },
    logoURL: "localhost",
  };
  public static contextType = React.createContext<AppState>(App.defaultState);
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      ...App.defaultState,
      logoURL: this.props.logoURL,
    };
    App.contextType = React.createContext(this.state);
  }
  public login = (): void => {
    const nextState: AppState = {
      ...this.state,
      login: true,
      profile: {
        username: "johndoe1",
        name: "John Doe",
        imageURL: this.state.profile.imageURL,
      },
    };
    this.setState(nextState);
    App.contextType = React.createContext(nextState);
  };
  render() {
    return <AppUI {...this.props} login={this.state.login} />;
  }
}

export default App;
