import { TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

function Login() {
  const { login } = useContext(AuthContext);
  // console.log("register", register);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    console.log("email", e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log("password", e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    login(email, password);
  };
  return (
    <div>
      <div>What?! You forgot youre credentials? You smartpants</div>
      <br />
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <br />

      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        // autoComplete="current-password"
      />
      <Typography>Forgot your password?</Typography>
      {/* <form action="" method="post"> */}
      <input type="submit" value="submit" onClick={handleLogin} />
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
