import React, { Component } from "react";
import { TagsInputProps, TagsInputState } from "./TagsInput.interface";
import TagsBoxUI from "./TagsInput.component";
import { Tag } from "react-tag-input";

export class TagsBox extends Component<TagsInputProps, TagsInputState> {
  constructor(props: TagsInputProps) {
    super(props);
    this.state = {
      tags: this.props.tags ? this.props.tags : [],
    };
  }
  public handleAdd = (tag: Tag): void => {
    const length: number = this.state.tags.length;
    const lastTag: Tag | undefined = this.state.tags[length - 1];
    let nextID: number = 0;
    if (lastTag !== undefined) nextID = Number(lastTag.id) + 1;
    tag.id = "" + nextID;
    this.setState({ ...this.state, tags: [...this.state.tags, tag] });
  };
  public handleDelete = (index: number): void => {
    const tags = this.state.tags;
    this.setState({
      ...this.state,
      tags: tags.filter((cur, i) => i !== index),
    });
  };
  public handleDrag = (tag: Tag, curIndex: number, nextIndex: number): void => {
    const tags = this.state.tags;
    const nTags = tags.slice();
    nTags.splice(curIndex, 1);
    nTags.splice(nextIndex, 0, tag);
    this.setState({ ...this.state, tags: nTags });
  };
  public render() {
    console.log(this.state.tags);
    return (
      <TagsBoxUI
        {...this.props}
        tags={this.state.tags}
        handleAdd={this.handleAdd}
        handleDelete={this.handleDelete}
        handleDrag={this.handleDrag}
      />
    );
  }
}

export default TagsBox;
