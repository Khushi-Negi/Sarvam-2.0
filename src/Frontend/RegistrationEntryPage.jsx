import React, { useState } from "react";
import "./RegistrationEntryPage.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";

function RegistrationEntryPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  return (
    <div>
      <Navigation />
      <SideNavBar />

      <div className="container" style={{ width: 600, height: 400 }}>
        <center>
          <h4>REGISTRATION PAGE</h4>
        </center>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <center>
              <h6 style={{ marginTop: "20px" }}>Name:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </center>

          <label htmlFor="email">
            <center>
              <h6 style={{ marginTop: "20px" }}>Email:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </center>
          <center>
            <input
              type="submit"
              value="Submit"
              style={{ marginTop: "40px", width: 300 }}
            />
          </center>
        </form>
        <center>
          <h6>
            <p
              style={{
                fontFamily: "Times New Roman, Times, serif",
                letterSpacing: "0",
                fontSize: "20px",
                marginTop: "40px",
                textAlign: "center",
              }}
            >
              Already have an account?{" "}
              <Link to="/LoginPage">
                <a
                  style={{
                    fontFamily: "Times New Roman, Times, serif",
                    letterSpacing: "0",
                    fontSize: "20px",
                    marginTop: "40px",
                    textAlign: "center",
                    color: "yellow",
                  }}
                >
                  Login here
                </a>
              </Link>
            </p>
          </h6>
        </center>
      </div>
    </div>
  );
}

export default RegistrationEntryPage;
