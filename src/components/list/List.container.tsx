import React, { Component } from "react";
import { ListProps, ListState, ListMode } from "./List.interface";
import ListUI from "./List.component";
import { ListItemProps } from "./list_item";

export class List<T extends ListItemProps> extends Component<
  ListProps<T>,
  ListState<T>
> {
  private increment: number;

  constructor(props: ListProps<T>) {
    super(props);
    this.state = {
      mode: this.props.mode,
      selectedIndexes: [],
      items: [],
      page: this.props.page ?? 0,
    };
    this.increment = 20;
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

  public handleDelete = () => {
    const selected = this.getSelected(this.state.selectedIndexes);
    const unselected = this.getUnselected(this.state.selectedIndexes);
    this.setState({
      ...this.state,
      items: unselected,
      selectedIndexes: new Array<number>(),
    });
    this.props.onDelete?.(selected);
  };

  /**
   * Allows the child modal to add to the list
   * @param items List Items
   */
  public useAdd = (items: T[]) => {
    this.setState({ ...this.state, items: this.state.items.concat(items) });
  };

  public lazyLoad = async () => {
    const items = await this.props.items.get?.(
      this.state.page * this.increment,
      (this.state.page + 1) * this.increment
    );
    this.setState({
      ...this.state,
      items: items ?? [],
    });
    return items;
  };

  public setPage = (page: number) => {
    this.setState({
      ...this.state,
      page,
    });
  };

  public shouldComponentUpdate(
    nextProps: ListProps<T>,
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
        setPage={this.setPage}
        lazyLoad={this.lazyLoad}
        page={this.state.page}
        mode={this.state.mode}
        selectedIndexes={this.state.selectedIndexes}
        handleMode={this.handleMode}
        handleSelect={this.handleSelect}
        handleDelete={this.handleDelete}
        useAdd={this.useAdd}
      />
    );
  }
}

export default List;
