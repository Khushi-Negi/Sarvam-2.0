import React from "react";
import "./LoginPage.css";
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";

function LoginPage() {
  //const history = useHistory(); // Initialize useHistory hook
  //khushi is a fool and i'm a genius mothafokaaaassss
  return (
    <div>
      <Navigation />
      <SideNavBar />
      <div className="first-container">
      <div className="content">
        <h1 style={{ fontSize: 80 }}> Sarvam </h1>

        <h2 style={{ marginTop: 20 }}>LOGIN AS</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/StudentLoginPage">
            <center>
              <strong>
                <a
                  className="btn"
                  href="#link"
                  style={{
                    display: "inline-block",
                    margin: "0 10px",
                    marginTop: 60,
                  }}
                >
                  <i>S</i>
                  <i>T</i>
                  <i>U</i>
                  <i>D</i>
                  <i>E</i>
                  <i>N</i>
                  <i>T</i>
                </a>
              </strong>
            </center>
          </Link>
          <Link to="/FacultyLoginPage">
            <center>
              <strong>
                <a
                  className="btn"
                  href="#link"
                  style={{
                    display: "inline-block",
                    margin: "0 10px",
                    marginTop: 60,
                  }}
                >
                  <i>F</i>
                  <i>A</i>
                  <i>C</i>
                  <i>U</i>
                  <i>L</i>
                  <i>T</i>
                  <i>Y</i>
                </a>
              </strong>
            </center>
          </Link>
        </div>
      </div>
      <footer>
        <nav>
          <a href="#">Contact Us</a>
          <a href="#">Search</a>
          <a href="#">Share</a>
        </nav>
      </footer>
    </div>
    </div>
  );
}

export default LoginPage;
