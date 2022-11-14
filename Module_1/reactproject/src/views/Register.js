import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext.js";

function Register() {
  const { register } = useContext(AuthContext);
  console.log("register", register);
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
      <Typography variant="h5" componetn="h2">
        Register u smartpants
      </Typography>
      <br />
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        autoComplete="off"
      />
      <br />
      <br />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        autoComplete="off"
        // autoComplete="current-password"
      />
      <br />
      <br />

      {/* <TextField
        id="outlined-password-input"
        label="Confirm password"
        type="password"
        // autoComplete="current-password"
      /> */}

      <Button
        sx={{ mt: 1, mr: 1 }}
        type="submit"
        variant="outlined"
        onClick={handleRegister}
      >
        Register
      </Button>
    </>
  );
}

export default Register;
