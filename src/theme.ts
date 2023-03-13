import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    allVariants: {
      fontSize: 16,
    },
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      light: "#8CB7F5",
      main: "#0D6EFD",
    },
    secondary: {
      light: "#8B96A5",
      main: "#505050",
    },
    info: {
      light: "#E0E0E0",
      main: "#1C1C1C",
    },
    success: {
      light: "#DEE2E7",
      main: "#E0E0E0",
    },
    background: {
      default: "#DADADA",
    },
  },

  components: {
    // Inputs
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#eee", // As an example color
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #DEE2E7",
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #DEE2E7",
            },
          },
        },
      },
    },
  },
});
