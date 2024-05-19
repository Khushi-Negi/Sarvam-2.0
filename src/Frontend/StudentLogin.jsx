import "./StudentFaculty.css";
import React, { useState } from "react";
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentLoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/Sarvam/studentlogin.php",
        { loginId, password }
      );
      setMessage(response.data.message);

      if (response.data.success) {
        // Assuming the response contains a success field
        navigate("/TeacherDetailsForm"); // Navigate to the next page upon successful login
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Navigation />
      <SideNavBar />

      <div className="container" style={{ width: 600, height: 400 }}>
        <h1>STUDENT LOGIN</h1>
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="loginId">
            <center>
              <h6 style={{ marginTop: "40px" }}>Login ID:</h6>
            </center>
          </label>

          <center>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              type="text"
              id="loginId"
              name="loginId"
              placeholder="Enter your login ID"
              value={loginId}
              onChange={(event) => setLoginId(event.target.value)}
              required
            />
          </center>

          <label htmlFor="password">
            <center>
              <h6 style={{ marginTop: "40px" }}>Password:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: "11px 140px", height: 45 }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={handlePasswordChange}
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
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default StudentLoginPage;
