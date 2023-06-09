import React, {useEffect, useState} from "react";
import './Lessons.scss'
import AccordionMenu from "../Components/AccordionMenu/AccordionMenu";
import {useLocation} from "react-router";
import Lesson from "../Components/Lesson/Lesson";
import {BACKEND_SERVER} from "../constants/constants";

const Lessons = () => {
    const [lessons, setLessons] = useState([]);
    const [lessonContent, setLessonContent] = useState([]);

    const currentURL = useLocation().pathname.split('/');
    let fetchURL = `${BACKEND_SERVER}programs/courses/${currentURL[2]}/view/`;

    const getLessons = () => {
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                setLessons(data.lessons);
            });
        return true;
    }

    const getLessonContent = (url) => {
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                setLessonContent(data.lessons.find(item => item.uid === url));
            });

        return true;
    }
    useEffect(() => {
       getLessons();
    },[]);

    useEffect(() => {
        getLessonContent(currentURL[4]);
    }, [currentURL[4]])

    const percent = 70;

    return(
        <div className="lessons">
            <div className="lessons__sidebar">
                <div className="progress">
                    <div className="progress-info">
                        <div className="progress-info__stat">
                            <span>Ваш прогресс</span>
                            <p>Изучено: {percent}%</p>
                        </div>
                        <div className="progress-bar">
                            <div style={{ width: `${percent}%` }} className="progress-bar__inner"></div>
                        </div>
                    </div>
                </div>
                <AccordionMenu
                    lessons = {lessons}
                />
            </div>
            <div className="lessons__content">
                <Lesson
                    title={lessonContent.title}
                    description={lessonContent.body_html}
                    poll={lessonContent.poll}
                />
            </div>
        </div>

    )
}

export default Lessons;