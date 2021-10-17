import { blue, neutral, red } from "./colors";
import { primaryFont } from "./typography";

export interface ITheme {
  backgroundColor: string;
  editorColor: string;
  primaryColor: string;
  primaryColorHover: string;
  primaryColorActive: string;
  textColorOnPrimary: string;
  textColor: string;
  textColorInverted: string;
  disabled: string;
  primaryFont: string;
  status: {
    warning: {
      color: string;
      onHover: string;
      onActive: string;
    };
  };
}

export const defaultTheme: ITheme = {
  backgroundColor: "#f8f8ff",
  editorColor: "#ffffff",
  primaryColor: blue[300],
  primaryColorHover: blue[200],
  primaryColorActive: blue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  primaryFont,
  status: {
    warning: {
      color: red[100],
      onHover: red[200],
      onActive: red[300],
    },
  },
};

export const darkTheme: ITheme = {
  backgroundColor: "#121212",
  editorColor: "#444444",
  primaryColor: neutral[100],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[100],
  textColorOnPrimary: blue[300],
  textColor: neutral[100],
  textColorInverted: neutral[600],
  disabled: neutral[400],
  primaryFont,
  status: {
    warning: {
      color: red[100],
      onHover: red[200],
      onActive: red[300],
    },
  },
};
