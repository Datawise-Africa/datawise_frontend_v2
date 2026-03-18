export type DropdownItem = {
  title: string;
  url: string;
  description?: string;
  external?: boolean;
};

export type MegaMenuGroup = {
  heading: string;
  items: DropdownItem[];
};

export type MegaMenuFeatured = {
  title: string;
  description: string;
  url: string;
  external?: boolean;
};

export type MegaMenuConfig = {
  groups: MegaMenuGroup[];
  featured?: MegaMenuFeatured[];
};

export type NavigationItem = {
  title: string;
  url: string;
  external?: boolean;
  megaMenu?: MegaMenuConfig;
  dropdownItems: DropdownItem[];
};
