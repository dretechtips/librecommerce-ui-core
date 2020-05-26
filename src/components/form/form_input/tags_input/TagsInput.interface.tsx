import { Tag } from "react-tag-input";

export interface TagsInputProps {
  tags?: Tag[];
  readOnly?: boolean;
  onChange?: (e: Tag[]) => void;
}

export interface TagsInputUIProps extends TagsInputProps {
  tags: Tag[];
  handleDelete: (index: number) => void;
  handleAdd: (tag: Tag) => void;
  handleDrag: (tag: Tag, indexOfCur: number, indexOfNew: number) => void;
}

export interface TagsInputState {
  tags: Tag[];
}

export interface TagsInputInputProps {
  tags?: Tag[];
}
