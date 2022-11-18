import React from "react";
import './Lessons.scss'
import AccordionMenu from "../Components/AccordionMenu/AccordionMenu";
import {useLocation} from "react-router";
import db from '../assets/db.json'
import Lesson from "../Components/Lesson/Lesson";

const Lessons = () => {
    const currentURL = useLocation().pathname.split('/')[4];

    const inner = db.find(item => item.lessons.find(i => i.l_id === currentURL));
    let lesson;
    inner ? lesson = inner.lessons.find(item => item.l_id === currentURL) : lesson = db[0].lessons[0];

    // console.log(inner)

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
                <AccordionMenu/>
            </div>
            <div className="lessons__content">
                <Lesson
                    title={lesson.l_title}
                    description={lesson.l_description}
                />
            </div>


        </div>

    )
}

export default Lessons;