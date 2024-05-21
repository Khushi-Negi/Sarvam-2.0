import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Frontend/MainPage";
import LoginPage from "./Frontend/LoginPage";
import StudentLoginPage from "./Frontend/StudentLogin";
import FacultyLoginPage from "./Frontend/FacultyLogin";
import RegistrationEntryPage from "./Frontend/RegistrationEntryPage";
import TeacherDetailsForm from "./Frontend/timetable";
import Slideshow from "./Frontend/SlideShow";
import Profile from "./Frontend/Profile";
import CheckAttendance from "./Frontend/CheckAttendance";
import Game from "./Frontend/Game";
// import BirdGame from "./Frontend/BirdGame";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/StudentLoginPage" element={<StudentLoginPage />} />
        <Route path="/FacultyLoginPage" element={<FacultyLoginPage />} />
        <Route path="/RegistrationEntryPage" element={<RegistrationEntryPage />}/>
        <Route path="/TeacherDetailsForm" element={<TeacherDetailsForm />}/>
        <Route path="/SlideShow" element={<Slideshow/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/CheckAttendance" element={<CheckAttendance/>}/>
        <Route path="/TeacherDetailsForm " element={<TeacherDetailsForm/>}/>
        {/* <Route path="/BirdGame" element={<BirdGame/>}/> */}
        <Route path="/Game" element={<Game/>}/>
      </Routes>
    </Router>
  );
}

export default App;