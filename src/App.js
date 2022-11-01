import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Courses from "./Pages/Courses";
import Course from "./Pages/Course"
import Knowledge from "./Pages/Knowledge";
import Layout from "./Components/Layout/Layout";


function App() {
  return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="education" element={<Education/>}/>
                    <Route path="courses" element={<Courses/>}/>
                    <Route path="course" element={<Course/>}/>
                    <Route path="knowledge" element={<Knowledge/>}/>
                </Route>
            </Routes>
  );
}

export default App;
