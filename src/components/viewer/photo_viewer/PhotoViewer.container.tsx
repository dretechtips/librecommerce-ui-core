import React, { Component } from "react";
import PhotoViewerUI from "./PhotoViewer.component";
import { PhotoViewerProps, PhotoViewerState } from "./PhotoViewer.interface";

export class PhotoViewer extends Component<PhotoViewerProps, PhotoViewerState> {
  constructor(props: PhotoViewerProps) {
    super(props);
    this.state = {
      selected: {
        index: -1,
        xPercent: 0,
        yPercent: 0,
      },
      imageRects: this.getPhotos().map((cur) => cur.getBoundingClientRect()),
      lastScrollTime: null,
    };
  }

  public getPhotos(): HTMLImageElement[] {
    return this.props.photos.map((cur) =>
      typeof cur === "string"
        ? ({
            ...new HTMLImageElement(),
            src: cur,
          } as HTMLImageElement)
        : cur
    );
  }

  public componentWillReceiveProps(nextProps: PhotoViewerProps) {
    this.setState({
      ...this.state,
      imageRects: nextProps.photos.map((cur) => null),
    });
  }
  public setPhotosRect = (image: HTMLImageElement | null, index: number) => {
    if (image) {
      this.state.imageRects[index] = image.getBoundingClientRect();
    }
  };
  public displaySelected = (index: number) => {
    this.setState({
      ...this.state,
      selected: { ...this.state.selected, index },
    });
  };
  public clearSelected = () => {
    this.setState({
      ...this.state,
      selected: { ...this.state.selected, index: -1 },
    });
  };
  public zoomSelected = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number
  ) => {
    console.log(this.state.lastScrollTime);
    if (
      this.state.lastScrollTime &&
      new Date().getTime() < this.state.lastScrollTime + 500
    ) {
      console.log("Scrolling");
      return;
    }
    const rect: ClientRect | DOMRect | null = this.state.imageRects[index];
    if (rect) {
      const offsetX: number = e.clientX - rect.left;
      const offsetY: number = e.clientY - rect.top;
      this.setState({
        ...this.state,
        selected: {
          ...this.state.selected,
          xPercent: (offsetX / rect.width) * 100,
          yPercent: (offsetY / rect.height) * 100,
        },
      });
    }
  };
  public render() {
    return (
      <PhotoViewerUI
        remove={this.props.remove}
        add={this.props.add}
        photos={this.getPhotos()}
        select={{
          clear: this.clearSelected,
          toggle: this.displaySelected,
          selected: this.state.selected.index,
          zoom: this.zoomSelected,
          set: this.setPhotosRect,
          xPercent: this.state.selected.xPercent,
          yPercent: this.state.selected.yPercent,
        }}
      />
    );
  }
}

export default PhotoViewer;
