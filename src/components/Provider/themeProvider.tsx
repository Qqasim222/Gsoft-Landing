"use client";
import { FunctionComponent, PropsWithChildren} from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import  {theme} from "@/utlis/theme/defalutTheme";

const ThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {



  return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline /* MUI Styles */ />
        {children}
      </MuiThemeProvider>
  );
};

export default ThemeProvider;