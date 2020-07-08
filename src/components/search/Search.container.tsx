import React, { Component, ErrorInfo } from "react";
import { SearchState, SearchProps } from "./Search.interface";
import SearchUI from "./Search.component";
import { AxiosResponse } from "axios";
import { FormStatus } from "../form";
import { IS_DEBUG } from "src/env";
import { SearchResultProps } from "./search_result/SearchResult.interface";
import { ListItemProps, QueryListItemProps } from "../list";

export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      results: [],
      hasSearched: false,
      hasError: false,
    };
  }

  public onSubmit = (status: FormStatus, res?: AxiosResponse) => {
    try {
      if (status === "success" && res) {
        this.props.onResults?.(this.state.results);
        const results = res.data.results;
        if (!Array.isArray(results))
          throw new TypeError("Invalid Results Type");
        this.setState({
          ...this.state,
          results: results.map(this.props.toResult),
        });
        this.setState({
          ...this.state,
          hasSearched: true,
        });
      }
      throw new Error("Server-side search failed!");
    } catch (e) {
      console.log(e.message);
      this.setState({ ...this.state, hasError: true });
    }
  };

  public toListItem = (result: SearchResultProps): QueryListItemProps => {
    return {
      ...result,
    };
  };

  public componentDidCatch(error: Error, info: ErrorInfo) {
    if (IS_DEBUG) {
      console.log(error.message);
    }
    this.setState({ ...this.state, hasError: true });
  }

  public render() {
    return (
      <SearchUI
        {...this.props}
        submittable={true}
        onSubmit={this.onSubmit}
        toListItem={this.toListItem}
        results={this.state.results}
        hasSearched={this.state.hasSearched}
        hasError={this.state.hasError}
      />
    );
  }
}

export default Search;
