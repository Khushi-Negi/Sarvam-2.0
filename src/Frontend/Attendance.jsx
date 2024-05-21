import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";
import "./Attendence.css";

function AttendanceManagementSystem() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/SARVAM/get_students.php')
      .then(response => {
        const data = response.data;
        if (Array.isArray(data)) {
          setStudents(data);
        } else {
          setError('Unexpected response format');
        }
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching students');
        setLoading(false);
      });
  }, []);

  const handleChange = (studentId, status) => {
    setAttendance(prevAttendance => ({
      ...prevAttendance,
      [studentId]: status
    }));
  };

  const submitAttendance = () => {
    console.log('Submitting attendance:', attendance);
    axios.post('http://localhost/SARVAM/mark_attendance.php', {
      attendance: attendance
    })
    .then(response => {
      console.log('Attendance marked:', response.data);
      alert('Attendance marked successfully');
    })
    .catch(error => {
      console.error('Error marking attendance:', error);
      alert('Error marking attendance');
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navigation />
      <SideNavBar />
      <div className="container" style={{ width: 950, height: 400 }}>
        <center>
          <h1>Student Attendance</h1>
          <table style={{
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 20,
              marginTop: 40,
              letterSpacing: 0,
            }}>
            <thead>
              <tr>
                <th>ERPID</th>
                <th style={{left:10}}>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody style={{
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 10,
              marginTop: 40,
              letterSpacing: 0,
            }}>
              {students.map(student => (
                <tr key={student.id}>
                 <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <center>
                    <input
                      type="text"
                     placeholder="Present/Absent"
                      value={attendance[student.id] || ''}
                      onChange={e => handleChange(student.id, e.target.value)}
                      style={{
                        fontSize: 25,
                        marginTop: 20,
                        letterSpacing: 0,
                      }}
                    />
                    </center>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <center>
          <button onClick={submitAttendance} className="button" style={{ marginTop: 40, width: 700, fontSize: 10 }}>Submit Attendance</button>
          </center>
        </center>
      </div>
    </div>
  );
}

export default AttendanceManagementSystem;
