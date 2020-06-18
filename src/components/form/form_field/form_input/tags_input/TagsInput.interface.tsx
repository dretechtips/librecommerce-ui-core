import { Tag } from "react-tag-input";
import { FormInputProps } from "../FormInput.interface";

export interface TagsInputProps extends FormInputProps<string[]> {
  tags?: Tag[];
}

export interface TagsInputUIProps extends TagsInputProps {
  tags: Tag[];
  handleDelete: (index: number) => void;
  handleAdd: (tag: Tag) => void;
  handleDrag: (tag: Tag, curIndex: number, nextIndex: number) => void;
}

export interface TagsInputState {
  tags: Tag[];
}

export interface TagsInputInputProps {
  tags?: Tag[];
}
