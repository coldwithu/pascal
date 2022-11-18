import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Courses from "./Pages/Courses";
import Course from "./Pages/Course"
import Knowledge from "./Pages/Knowledge";
import Layout from "./Components/Layout/Layout";
import Lessons from "./Pages/Lessons";
import Lesson from "./Components/Lesson/Lesson";


function App() {
  return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="education" element={<Education/>}/>
                    <Route path="courses" element={<Courses/>}/>
                    <Route path="courses/:id" element ={<Course/>}/>
                    <Route path="courses/:id/lessons/*" element={<Lessons/>}>
                        <Route path=":id" element={<Lesson/>}/>
                    </Route>
                    <Route path="knowledge" element={<Knowledge/>}/>
                </Route>
            </Routes>
  );
}

export default App;
