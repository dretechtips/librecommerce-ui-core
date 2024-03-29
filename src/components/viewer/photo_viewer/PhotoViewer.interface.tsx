export interface PhotoViewerState {
  selected: PhotoViewerSelected;
  imageRects: (DOMRect | ClientRect | null)[];
  lastScrollTime: number | null;
}

export interface PhotoViewerUIProps extends PhotoViewerProps {
  photos: HTMLImageElement[];
  select: PhotoViewerSelect;
}

export interface PhotoViewerProps {
  /**
   * HTML Photo || Photo URL
   */
  photos: (HTMLImageElement | string)[];
  add?: () => void;
  remove?: (index: number) => void;
}

export interface PhotoViewerSelect {
  toggle: (index: number) => void;
  clear: () => void;
  selected: number;
  zoom: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number
  ) => void;
  set: (ref: HTMLImageElement | null, index: number) => void;
  xPercent: number;
  yPercent: number;
}

export interface PhotoViewerSelected {
  index: number;
  xPercent: number;
  yPercent: number;
}
