import React from "react";
import "./Nav.css";
import "../views/Home.js";
import "../views/Register.js";
import "../views/Login.js";
import { NavLink } from "react-router-dom";

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
    </nav>
  );
}

export default Nav;
