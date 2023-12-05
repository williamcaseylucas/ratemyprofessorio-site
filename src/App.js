import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Admin from "./components/Admin";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Terms from "./components/Terms";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/students" element={<Student />} />
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/admins" element={<Admin />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
