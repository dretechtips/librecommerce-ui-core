export interface AppNavGroup {
  title: string;
  icon: string;
  items?: AppNavItem[];
  basePath: string;
}

export interface AppNavItem {
  path: string;
  icon?: string;
  name: string;
}
