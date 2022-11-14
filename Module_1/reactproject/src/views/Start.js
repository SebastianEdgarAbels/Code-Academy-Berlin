import { ThemeProvider } from "@emotion/react";
import { createTheme, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

const theme = createTheme({
  typography: {
    body: {
      color: green[500],
    },
  },
});

export default function StartPage() {
  const imagePath = "/images/Naruto.ico";
  const imageAlt = "naruto";

  return (
    <>
      <div>
        <img src={imagePath} alt={imageAlt} />
      </div>
      <br />
      <br />

      <ThemeProvider theme={theme}>
        <Typography variant="body">
          This Website is made with the API from{" "}
          <a href="https://www.freetogame.com/">freetogame</a> and was made for
          learning purposes. This project was made with use of React, Material
          UI, Firebase/Firestore.
        </Typography>
      </ThemeProvider>
    </>
  );
}
