import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    selectColor: string;
    desColor: string;
    tabColor: string;
  }
}
