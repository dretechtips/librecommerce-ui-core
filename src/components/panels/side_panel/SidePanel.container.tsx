import React, { Component } from "react";
import { SidePanelProps, SidePanelState } from "./SidePanel.interface";
import SidePanelUI from "./SidePanel.component";
import getScreenType from "src/utils/ScreenToSize";

export class SidePanel extends Component<SidePanelProps, SidePanelState> {
  constructor(props: SidePanelProps) {
    super(props);
    this.state = {
      active: -1,
      isSliding: false,
      position: 0,
      isOpen: false,
      toggleOpen: this.toggleOpen,
    };
  }
  public toggleOpen = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  };

  public setActive = (value: number) => {
    this.setState({ ...this.state, active: value });
  };

  public slideCapture = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (this.state.isSliding) {
      if (e.movementX < 0)
        this.setState({
          ...this.state,
          position: this.state.position + e.movementX,
        });
      else if (e.movementX > 0 && this.state.position < 0)
        this.setState({
          ...this.state,
          position: this.state.position + e.movementX,
        });
      else if (this.state.position > 0)
        this.setState({ ...this.state, position: 0 });
    }
  };
  public slideInit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({ ...this.state, isSliding: true });
  };
  public slideEnd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({ ...this.state, isSliding: false, position: 0 });
  };
  public touchInit = (e: React.TouchEvent<HTMLDivElement>) => {
    this.setState({ ...this.state, isSliding: true });
  };
  public touchCapture = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch: React.Touch = e.touches.item(0);
  };
  public touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    this.setState({ ...this.state, isSliding: false, position: 0 });
  };
  public render() {
    return (
      <SidePanelUI
        {...this.props}
        screen={getScreenType()}
        setActive={this.setActive}
        slide={{
          position: this.state.position,
          init: this.slideInit,
          capture: this.slideCapture,
          end: this.slideEnd,
        }}
        active={this.state.active}
        isOpen={this.state.isOpen}
        toggleOpen={this.toggleOpen}
      />
    );
  }
}

export default SidePanel;
