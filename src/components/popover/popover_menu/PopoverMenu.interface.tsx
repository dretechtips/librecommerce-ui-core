export interface PopoverMenuProps {
  items: PopoverMenuItem[];
}

export interface PopoverMenuItem {
  icon: string;
  name: string;
  action: () => void;
}
