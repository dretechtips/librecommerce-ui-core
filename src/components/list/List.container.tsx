import React, { Component } from "react";
import { ListProps, ListState, ListMode } from "./List.interface";
import ListUI from "./List.component";
import { ListItemProps, ListItemUIProps } from "./list_items/list_item";

export class List<
  T extends ListItemProps,
  U extends ListItemUIProps
> extends Component<ListProps<T, U>, ListState<T>> {
  constructor(props: ListProps<T, U>) {
    super(props);
    this.state = {
      mode: this.props.mode,
      selectedIndexes: [],
      items: [],
      page: this.props.page ?? 0,
    };
  }

  public getSelected = (indexes: number[]): T[] => {
    return this.state.items.filter(
      (cur, index) => !this.state.selectedIndexes.includes(index)
    );
  };

  public getUnselected = (indexes: number[]): T[] => {
    return this.state.items.filter((cur, index) =>
      this.state.selectedIndexes.includes(index)
    );
  };

  public handleMode = (mode: ListMode) => {
    this.setState({ ...this.state, mode });
  };

  public handleSelect = (indexes: number[]) => {
    this.setState({ ...this.state, selectedIndexes: indexes });
    this.props.onSelect?.(this.getSelected(indexes));
  };

  public handlePage = (page: number) => {
    this.setState({
      ...this.state,
      page,
    });
  };

  public handleMove = (from: number, to: number) => {
    const a = this.state.items[from];
    this.state.items[from] = this.state.items[to];
    this.state.items[to] = a;
    this.setState({ ...this.state });
    this.props.onMove?.(this.state.items);
  };

  public lazyLoad = async () => {
    const items = await this.props.items.get?.(
      this.state.page * this.props.pageSize,
      (this.state.page + 1) * this.props.pageSize
    );
    this.setState({
      ...this.state,
      items: items ?? [],
    });
    return items;
  };

  public shouldComponentUpdate(
    nextProps: ListProps<T, U>,
    nextState: ListState<T>
  ) {
    // Stops re-rendering on item update
    if (this.state.items !== nextState.items) return false;
    return true;
  }

  public render() {
    return (
      <ListUI
        {...this.props}
        state={this.state}
        setState={this.setState.bind(this)}
        lazyLoad={this.lazyLoad}
        handleMode={this.handleMode}
        handleSelect={this.handleSelect}
        handleMove={this.handleMove}
        handlePage={this.handlePage}
      />
    );
  }
}

export default List;
