export interface SidePanelItemProps {
  title: string;
  icon: string;
  index?: number;
  onClick: () => void;
  isActive: boolean;
}