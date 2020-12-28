import React, { Component } from "react";
import logo from "./logo.svg";
import "../App.css";

import { Link } from "react-router-dom";

export default class Nav extends Component {
  style = {
    height: "auto",
    width: "120px",
  };
  render() {
    return (
      <nav>
        <img style={this.style} src={logo} alt='Offcial logo' />
        <ul className='links'>
          <Link to='/blogs'>
            <li>Blogs</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
