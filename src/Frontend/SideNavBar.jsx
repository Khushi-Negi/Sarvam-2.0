import "./SideNavBar.css";
import React from "react";

function SideNavBar() {
  return (
    <div id="mySidenav" className="sidenav">
      <center>
        <a href="#" id="ERP">
          <h4 style={{ letterSpacing: 0 }}>About</h4>
        </a>
      </center>
      <center>
        <a href="#" id="blog">
          <h4 style={{ letterSpacing: 0 }}>Blog</h4>
        </a>
      </center>
      <center>
        <a href="#" id="projects">
          <h4 style={{ letterSpacing: 0 }}>Projects</h4>
        </a>
      </center>
      <center>
        <a href="#" id="contact">
          <h4 style={{ letterSpacing: 0 }}>Contact</h4>
        </a>
      </center>
    </div>
  );
}

export default SideNavBar;
