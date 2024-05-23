import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import SideNavBar from './SideNavBar';
import './MainPage.css';
import "./results.css";

function ResultsPage() {
  const location = useLocation();
  const { result, teacherName } = location.state || { result: [], teacherName: '' };

  return (
    <div>
      <Navigation />
      <SideNavBar />
     

      <div className="first-container">
      <center>
        <strong>
          <p
            className="post-meta"
            style={{
  
              fontSize: 15,
              marginTop: 40,
              letterSpacing:8,
            }}
          >
            The professor you seek,  <span style={{ color: 'yellow' }}>{teacherName}</span>, is in the mysterious realm
          </p>
          <p
            style={{
              
              fontSize: 15,
              marginTop: 10,
              letterSpacing: 8,
            }}
          >
            of knowledge and chaos, also known as the classroom!
          </p>
        </strong>
      </center>

        <center>
          {result.length > 0 ? (
            <table className="results-table">
              <thead>
                <tr>
                  <th>Building</th>
                  <th>Room No</th>
                </tr>
              </thead>
              <tbody>
                {result.map((row, index) => (
                  <tr key={index}>
                    <td>{row.Building}</td>
                    <td>{row.ROOM_NO}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No timetable found for {teacherName}</p>
          )}
        </center>
      </div>
    </div>
  );
}

export default ResultsPage;
