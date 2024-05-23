import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Frontend/MainPage";
import LoginPage from "./Frontend/LoginPage";
import StudentLoginPage from "./Frontend/StudentLogin";
import FacultyLoginPage from "./Frontend/FacultyLogin";
import RegistrationEntryPage from "./Frontend/RegistrationEntryPage";
import TeacherDetailsForm from "./Frontend/timetable";
import Slideshow from "./Frontend/SlideShow";
import CheckAttendance from "./Frontend/CheckAttendance";
import Game from "./Frontend/Game";
import Facultyslideshow from "./Frontend/facultyslideshow";
import SigninasPage from "./Frontend/Signinas";
import Registrationforfaculty from "./Frontend/Registrationforfaculty";
import AttendanceManagementSystem from "./Frontend/Attendance";
import ResultsPage from "./Frontend/result";

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
       
        <Route path="/CheckAttendance" element={<CheckAttendance/>}/>
        <Route path="/TeacherDetailsForm " element={<TeacherDetailsForm/>}/>
        {/* <Route path="/BirdGame" element={<BirdGame/>}/> */}
        <Route path="/Game" element={<Game/>}/>
        <Route path="/SigninasPage" element={<SigninasPage/>}/>\
        <Route path="/Registrationforfaculty" element={<Registrationforfaculty/>}/>
        <Route path="/Facultyslideshow" element={<Facultyslideshow/>}/>
        <Route path="/AttendanceManagementSystem" element={<AttendanceManagementSystem/>}/>
        <Route path="/ResultsPage" element={<ResultsPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;