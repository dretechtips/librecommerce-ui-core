import React, { Component } from "react";
import { DashboardProps, DashboardState } from "./Dashboard.interface";
import DashboardUI from "./Dashboard.component";
import App from "../app/App.container";
import { AppNavGroup } from "../app/app_nav/AppNav.interface";

class Dashboard extends Component<DashboardProps, DashboardState> {
  static contextType: React.Context<DashboardState> = React.createContext(
    undefined as any
  );

  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      active: null,
      search: this.props.search ? this.props.search : "",
    };
  }
  public componentDidMount() {
    if (this.props.search) {
      this.search(this.props.search);
    }
  }

  public setActive = (value: number[]): void => {
    this.setState({ ...this.state, active: value });
  };

  public search = (value: string): void => {
    this.setState({
      ...this.state,
      search: value,
    });
  };
  public render() {
    return (
      <DashboardUI
        {...this.props}
        search={this.state.search}
        handleSearch={this.search}
        setActive={this.setActive}
      />
    );
  }
}

export default Dashboard;
