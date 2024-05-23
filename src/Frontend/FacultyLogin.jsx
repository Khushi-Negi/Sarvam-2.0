import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import SideNavBar from './SideNavBar';

function FacultyLoginPage() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost/SARVAM/facultylogin.php', {
        loginId,
        password,
      });
      setMessage(response.data.message);
      if (response.data.user) {
        navigate('/Facultyslideshow'); // Redirect to the slideshow page
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid login credentials');
      } else {
        setMessage('Error: ' + error.message);
      }
    }
  };

  return (
    <div>
      <Navigation />
      <SideNavBar />
      <div className="container" style={{ width: 600, height: 400 }}>
        <center>
          <h4>Professor's login</h4>
        </center>
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="loginId">
            <center>
              <h6 style={{ marginTop: '20px' }}>Login ID:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: '11px 140px', height: 43 }}
              type="text"
              id="loginId"
              name="loginId"
              placeholder="Enter your login ID"
              value={loginId}
              onChange={(event) => setLoginId(event.target.value)}
              required
              autoComplete='off'
            />
          </center>

          <label htmlFor="password">
            <center>
              <h6 style={{ marginTop: '20px' }}>Password:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: '11px 140px', height: 43 }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete='new-password'
            />
          </center>
          <center>
            <input
              type="submit"
              value="Submit"
              style={{ marginTop: '40px', width: 300 }}
            />
          </center>
        </form>
        <center>
          {message && <p>{message}</p>}
        </center>
      </div>
    </div>
  );
}

export default FacultyLoginPage;
