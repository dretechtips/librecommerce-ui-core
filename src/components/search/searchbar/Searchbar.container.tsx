import React, { Component } from "react";
import { SearchbarProps, SearchbarState } from "./Searchbar.interface";
import SearchbarUI from "./Searchbar.component";
import { IS_DEBUG } from "src/env";

export class Searchbar extends Component<SearchbarProps, SearchbarState> {
  constructor(props: SearchbarProps) {
    super(props);
    this.state = {
      results: [],
    };
  }

  public submit = async (value: string) => {
    try {
      const results = await this.props.fetch(value);
      this.setState({
        ...this.state,
        results,
      });
      this.props.onSearch?.(value, results);
    } catch (e) {
      if (IS_DEBUG) console.error("Searchbar failed to fetch results");
    }
  };

  public onKeypress = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.autoSearch) {
      e.preventDefault();
      this.submit(e.currentTarget.value);
    }
  };

  public shouldComponentUpdate(
    nextProps: SearchbarProps,
    nextState: SearchbarState
  ) {
    if (this.state.results !== nextState.results) return false;
    return true;
  }

  public render() {
    return (
      <SearchbarUI
        {...this.props}
        onKeypress={this.onKeypress}
        submit={this.submit}
        results={this.state.results}
      />
    );
  }
}

export default Searchbar;
