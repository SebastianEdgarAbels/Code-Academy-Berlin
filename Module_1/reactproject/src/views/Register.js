import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Register() {
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

  const handleRegister = () => {
    register(email, password);
  };

  return (
    <>
      <div>Register u smartpants</div>
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
      <br />
      <br />

      <TextField
        id="outlined-password-input"
        label="Confirm password"
        type="password"
        // autoComplete="current-password"
      />
      <br />
      <br />
      {/* <form action="" method="post"> */}
      {/* <input type="submit" value="submit" /> */}
      {/* </form> */}
      <Button onClick={handleRegister}> Register</Button>
    </>
  );
}

export default Register;
