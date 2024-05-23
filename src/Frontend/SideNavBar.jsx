import "./SideNavBar.css";
import React from "react";

function SideNavBar() {
  return (
    <div id="mySidenav" className="sidenav">
      <center>
        <a href="#" id="ERP">
          <h5  style={{ letterSpacing: 0 }}>About</h5 >
        </a>
      </center>
      <center>
        <a href="#" id="blog">
          <h5 style={{ letterSpacing: 0 }}>Blog</h5>
        </a>
      </center>
      <center>
        <a href="#" id="projects">
          <h5 style={{ letterSpacing: 0 }}>Projects</h5 >
        </a>
      </center>
      <center>
        <a href="#" id="contact">
          <h5  style={{ letterSpacing: 0 }}>Contact</h5 >
        </a>
      </center>
    </div>
  );
}

export default SideNavBar;
