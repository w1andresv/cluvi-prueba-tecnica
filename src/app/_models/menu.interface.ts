export interface MenuInterface {
  title:  string;
  icon:   string;
  url?:    string;
  items?:  MenuInterface[];
  activo?: string;
}
