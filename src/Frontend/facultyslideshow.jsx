import "./MainPage.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";
import "./DarkTheme.css";
import { DarkTheme } from "./Darktheme";

function Facultyslideshow() {
  DarkTheme();
  return (
    <div>
      <Navigation />
      <SideNavBar />
      <div className="first-container">
        <div className="content">
          <h2 style={{ fontSize: 80 }}> Sarvam </h2>
          <strong>
            <p>Mark Student Attendence</p>
          </strong>
          <strong>
            <p
              className="post-meta"
              style={{
                fontFamily: "Times New Roman, Times, serif",
                fontSize: 20,
                marginTop: 40,
                letterSpacing: 0,
              }}
            >
             Dear Professor, please work your magic and figure out who's here and who's still sleeping at home. Thank you!
            </p>
           
          </strong>
          <Link to="/AttendanceManagementSystem" style={{ textDecoration: "none" }}>
            <button className="button-cover" role="button">
              <span className="text">SUBMIT</span>
              <span>Check</span>
            </button>
          </Link>
          <footer>
            <nav>
              <a href="#">Contact Us</a>
              <a href="#">Search</a>
              <a href="#">Share</a>
            </nav>
          </footer>
        </div>
      </div>
      <div className="shift" style={{ marginLeft: 800 }}>
        <DarkTheme />
      </div>
    </div>
  );
}

export default Facultyslideshow;
