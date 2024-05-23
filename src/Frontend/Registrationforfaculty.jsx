import React, { useState ,useEffect} from "react";
import "./RegistrationEntryPage.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";

function Registrationforfaculty() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("loginId").value = "";
    document.getElementById("password").value = "";
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost/SARVAM/facultyregister.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, loginId, password }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <Navigation />
      <SideNavBar />

      <div className="container" style={{ width: 700, height: 700 }}>
        <center>
          <h4>REGISTRATION PAGE</h4>
        </center>
        <form onSubmit={handleSubmit} method="POST" autoComplete="off">
          <input type="text" name="username" style={{ display: 'none' }} />
          <input type="password" name="password" style={{ display: 'none' }} />
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
              name={`name_${Math.random()}`}
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              autoComplete="off"
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
              name={`email_${Math.random()}`}
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="off"
            />
          </center>

          <label htmlFor="loginId">
            <center>
              <h6 style={{ marginTop: "20px" }}>Login ID:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              type="text"
              id="loginId"
              name={`loginId_${Math.random()}`}
              placeholder="Enter your Login ID"
              value={loginId}
              onChange={(event) => setLoginId(event.target.value)}
              required
              autoComplete="off"
            />
          </center>

          <label htmlFor="password">
            <center>
              <h6 style={{ marginTop: "20px" }}>Password:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              type="password"
              id="password"
              name={`password_${Math.random()}`}
              placeholder="Enter your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="off"
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
              <Link
                to="/facultyLoginPage"
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
              </Link>
            </p>
          </h6>
        </center>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Registrationforfaculty;
