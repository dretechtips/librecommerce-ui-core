import React, { Component } from "react";
import { PhotoInputProps, PhotoInputState } from "./PhotoInput.interface";
import PhotoInputUI from "./PhotoInput.component";

export class PhotoInput extends Component<PhotoInputProps, PhotoInputState> {
  fileInputElement: HTMLInputElement | null;
  constructor(props: PhotoInputProps) {
    super(props);
    this.state = {
      photos: this.props.photos ? this.props.photos : [],
      size: 0,
      remove: -1,
    };
    this.fileInputElement = null;
  }
  public readPhotosFile = (files: File[]) => {
    const photos: File[] = files;
    this.setState({
      ...this.state,
      size: photos.reduce((a, b) => a + b.size, 0),
    });
    photos.forEach((cur) => {
      const scanner = new FileReader();
      scanner.onload = this.filesToPhoto;
      scanner.readAsDataURL(cur.slice(0, cur.size));
    });
  };
  public filesToPhoto = (e: ProgressEvent<FileReader>) => {
    if (!e.target) return;
    if (typeof e.target!.result === "string") {
      if (
        this.state.photos.find((cur) => cur.src === e.target!.result) ===
        undefined
      ) {
        const photo: HTMLImageElement = new Image();
        photo.src = e.target.result;
        this.state.photos.unshift(photo);
      }
      this.setState({
        ...this.state,
        size: this.state.size + (e.target.result.length * 2) / 1000000,
      });
    }
  };
  public setFileUpload = (ref: HTMLInputElement) => {
    this.fileInputElement = ref;
  };
  public toggleFileUpload = () => {
    if (!this.fileInputElement) return;
    else this.fileInputElement.click();
  };
  public setRemoved = (index: number) => {
    this.state.photos.splice(index, 1);
    this.setState({ ...this.state, remove: index });
  };
  public getRemoved = () => this.state.remove;
  public clearRemoved = () => this.setState({ ...this.state, remove: -1 });
  public render() {
    return (
      <PhotoInputUI
        {...this.props}
        photos={this.state.photos}
        setPhotos={this.readPhotosFile}
        fileInput={{
          set: this.setFileUpload,
          toggle: this.toggleFileUpload,
          remove: {
            set: this.setRemoved,
            clear: this.clearRemoved,
            get: this.getRemoved,
          },
        }}
      />
    );
  }
}

export default PhotoInput;
