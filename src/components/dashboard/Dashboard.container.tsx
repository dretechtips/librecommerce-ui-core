import React, { Component } from "react";
import { DashboardProps, DashboardState } from "./Dashboard.interface";
import DashboardUI from "./Dashboard.component";

class Dashboard extends Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      display: this.props.menu,
      search: this.props.search ? this.props.search : "",
    };
    Dashboard.contextType = React.createContext(this.search);
  }
  public componentDidMount() {
    if (this.props.search) {
      this.search(this.props.search);
    }
  }

  public search = (value: string): void => {
    const submenus = this.props.menu.submenus.filter((submenu) =>
      new RegExp(value, "i").test(submenu.title)
    );
    this.setState({
      ...this.state,
      display: { ...this.props.menu, submenus: submenus },
    });
  };
  render() {
    return <DashboardUI handleSearch={this.search} menu={this.state.display} />;
  }
}

export default Dashboard;
