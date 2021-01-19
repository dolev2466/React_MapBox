import React, { Component } from "react";
import "./css/navbar.css";
const Navbar = (props) => {
  return (
    <div class="header">
      <label float="center" class="h1">
        Globus Gen B
      </label>
      <div class="header-right">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Navbar;
