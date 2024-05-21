import React, { useState } from 'react';
import axios from 'axios';
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";
import "./CheckAttendence.css";


function CheckAttendance() {
  const [studentId, setStudentId] = useState('');
  const [date, setDate] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [error, setError] = useState(null);

  const checkAttendance = (e) => {
    e.preventDefault(); // Prevent form submission
    axios.post('http://localhost/SARVAM/get_attendance.php', {
      student_id: studentId,
      date: date
    })
    .then(response => {
      if (response.data.status) {
        setAttendanceStatus(response.data.status);
        setError(null); // Clear any previous errors
      } else {
        setError(response.data.message || 'Error fetching attendance');
        setAttendanceStatus(null);
      }
    })
    .catch(error => {
      setError('Error fetching attendance');
      setAttendanceStatus(null);
    });
  };

  return (
    <div>
      <Navigation />
      <SideNavBar />

      <div className="container" style={{ width: 600, height: 400 }}>
        <center><h1>Check Attendance</h1></center>
        
        <form onSubmit={checkAttendance}>
          <label htmlFor="studentId">
            <center>
              <h6 style={{ marginTop: "40px" }}>Student_Id:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              type="text"
              value={studentId}
              onChange={e => setStudentId(e.target.value)}
              placeholder="Enter Student ID"
            />
          </center>
          <label htmlFor="date">
            <center>
              <h6 style={{ marginTop: "30px" }}>Date:</h6>
            </center>
          </label>
          <center>
            <input
              style={{ padding: "11px 140px", height: 43 }}
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              placeholder="Select Date"
            />
          </center>
          <center>
            <button type="submit" style={{ marginTop: 20, width: 500, fontSize: 10 }}>
              Check Attendance
            </button>
          </center>
        </form>
        
        {attendanceStatus && (
          <center>
            <p style={{
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 50,
              marginTop: 20,
              letterSpacing: 0,
            }}>
              Attendance Status: {attendanceStatus}
            </p>
          </center>
        )}
        {error && (
          <center>
            <p style={{ color: 'red' }}>{error}</p>
          </center>
        )}
      </div>
    </div>
  );
}

export default CheckAttendance;
