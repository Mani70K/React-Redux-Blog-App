import React, { Component } from "react";
import { Outlet } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
      <div>
        <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
        <h3><b>Blog Post App</b></h3>
        </nav>
      </div>
      <main>
        <Outlet/>
      </main>
      </>
    );
  }
}

export default Navbar;
