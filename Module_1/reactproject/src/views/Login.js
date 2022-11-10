import { TextField, Typography } from "@mui/material";
import React from "react";

function Login() {
  return (
    <div>
      <div>What?! You forgot youre credentials? You smartpants</div>
      <br />
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <br />
      <br />

      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Typography>Forgot your password?</Typography>
      {/* <form action="" method="post"> */}
      <input type="submit" value="submit" />
      {/* </form> */}
      <br />
      <br />
      <Typography>
        If you don't have an account,<a href="Register"> SignUp here! </a>
      </Typography>
    </div>
  );
}

export default Login;
