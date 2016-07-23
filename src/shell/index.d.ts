export interface MenuModel {
  state?: string,
  text: string,
  icon?: string,
  hasSub?: boolean,
  subMenu?: MenuModel[],
  tags?: string[]
}