import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      title: string;
      subtitle: string;
      text: string;
    },
    colors: {
      background: string;
      yellow: string;
      white: string;
      grey: string;
      skyblue: string;
    }

  }
}