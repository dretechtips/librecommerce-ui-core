import React, { Component } from "react";
import { AppState, AppProps } from "./App.interface";
import AppUI from "./App.component";
import { AppNavGroup } from "./app_nav/AppNav.interface";
import { ProfileProps } from "../profile/Profile.interface";

export class App extends Component<AppProps, AppState> {
  public static contextType: React.Context<AppState> = React.createContext(
    undefined as any
  );
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      login: false,
      setLogin: this.setLogin,
      setLogout: this.setLogout,
      logoURL: window.location.host + "/" + this.props.logoPath,
      profile: {
        name: "Name",
        username: "Username",
        imageURL: "https://via.placeholder.com/30x30",
      },
      navigation: this.getNavigation(),
      path: window.location.pathname,
      setPath: this.setPath,
    };
  }

  public getNavigation = (): AppNavGroup[] => {
    return this.props.navigation.map((nav) => {
      return {
        ...nav,
        items: nav.items?.map((item) => {
          return {
            ...item,
            path: nav.basePath + item.path,
          };
        }),
      };
    });
  };

  public setLogin = (value: boolean, profile?: ProfileProps): void => {
    if (value) this.props.onLogin();
    this.setState({
      ...this.state,
      login: value,
      profile: profile ? profile : this.state.profile,
    });
  };

  public setPath = (value: string): void => {
    this.setState({ ...this.state, path: value });
  };

  public setLogout = (url: string): void => {
    // TODO
  };

  render() {
    return (
      <App.contextType.Provider value={this.state}>
        <AppUI
          {...this.props}
          profile={this.state.profile}
          login={this.state.login}
          setLogin={this.state.setLogin}
          setLogout={this.state.setLogout}
        />
      </App.contextType.Provider>
    );
  }
}

export default App;
