import "./MainPage.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";
import "./DarkTheme.css";
import { DarkTheme } from "./Darktheme";

function MainPage() {
  DarkTheme();
  return (
  
    <div >
      <Navigation />
      <SideNavBar />
      <div className="first-container">
      <div className="content">
        <h1 style={{ fontSize: 80 }}> Sarvam </h1>
        <strong>
          <p>Login | Search | Logout</p>
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
            Sarvam is an innovative platform that integrates a sophisticated
            professor finder ,
          </p>
          <p
            style={{
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 20,
              marginTop: 10,
              letterSpacing: 0,
            }}
          >
            {" "}
            allowing students to easily locate and connect with professors based
            on their expertise.
          </p>
        </strong>
        <Link to="/LoginPage" style={{ textDecoration: "none" }}>
          <button className="button-cover" role="button">
            <span className="text">GET STARTED</span>
            <span>EXPLORE</span>
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
      <div className="shift" style={{marginLeft:800}}><DarkTheme /></div>
     </div>
  
  );
}

export default MainPage;
