import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;

      primaryText: string;
    };

    metrics: {
      baseMargin: number;
      basePadding: number;
      baseRadius: number;

      screenWidth: number;
      screenHeight: number;
    };
  }
}
