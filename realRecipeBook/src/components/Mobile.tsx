import GlobalStyles from "@mui/material/GlobalStyles";

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      ".container": {
        width: "100vw",
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
        [theme.breakpoints.up("md")]: {
          width: "100vw",
        },
        [theme.breakpoints.up("lg")]: {
          width: "100vw",
        },
      },
      ".item": {
        width: "100vw",
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
        [theme.breakpoints.up("md")]: {
          width: "100vw",
        },
        [theme.breakpoints.up("lg")]: {
          width: "100vw",
        },
      },
    })}
  />
);

export default globalStyles;
