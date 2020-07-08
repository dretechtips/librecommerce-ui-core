import React, { Component } from "react";
import { PaginationProps, PaginationState } from "./Pagination.interface";
import PaginationUI from "./Pagination.component";

export class Pagination extends Component<PaginationProps, PaginationState> {
  constructor(props: PaginationProps) {
    super(props);
    if ((props.total ?? 0) < (props.current ?? 0))
      throw new Error("PageOutOfBoundException");
    this.state = {
      current: this.props.current ? this.props.current : 0,
    };
  }
  public toNext = (): void => {
    this.setState({
      ...this.state,
      current: this.state.current + 1,
    });
    this.props.setPage(this.state.current + 1);
  };
  public toPrev = (): void => {
    this.setState({
      ...this.state,
      current: this.state.current - 1,
    });
    this.props.setPage(this.state.current - 1);
  };

  private toPage = (page: number): void => {
    this.setState({ ...this.state, current: page });
    this.props.setPage(page);
  };

  render() {
    return (
      <PaginationUI
        {...this.props}
        current={this.state.current}
        toPage={this.toPage}
        toNext={this.toNext}
        toPrev={this.toPrev}
      />
    );
  }
}

export default Pagination;
