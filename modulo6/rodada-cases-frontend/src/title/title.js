import { createTheme } from "@mui/material";
import { orange, black } from "./color";
 
export const titleMAIN = createTheme({
  palette: {
    primary: {
      main: '#2D0C5E',
      contrastText: black,
    },
    secondary: {
      main: orange,
    },
    bar: {
      main: orange,
      contrastText: black,
    },
    bar2: {
      main: orange,
      contrastText: orange,
    },
    success: {
      main: orange,
    },
  }
});