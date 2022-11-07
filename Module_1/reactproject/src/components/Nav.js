import React from "react";
import "./Nav.css";
import "../views/Home.js";
import "../views/Register.js";
import "../views/Login.js";
import { NavLink } from "react-router-dom";

import { Autocomplete, Stack, TextField } from "@mui/material";

function Nav() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <NavLink to="/">HOME</NavLink> | <NavLink to="/Login">LogIn</NavLink> |{" "}
      <NavLink to="/Register">Register</NavLink>
      <Stack spacing={3} sx={{ width: 500 }}>
        {/* <Autocomplete
          multiple
          id="tags-outlined"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={[top100Films[13]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="filterSelectedOptions"
              placeholder="Favorites"
            />
          )}
        /> */}
      </Stack>
    </nav>
  );
}

export default Nav;
