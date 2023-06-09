import React, {useState} from "react";
import './Lesson.scss'
import Player from "../Player/Player";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";


const Lesson = ({title, description, poll}) => {
    const currentLessonURL = useLocation().pathname.split('/')[4];


    return(
        <>
            <h1 className="lesson-title">
                {title}
            </h1>
            <div className="lesson-video">
                <Player/>
            </div>
            <div className="lesson-description" dangerouslySetInnerHTML={{__html: description}}></div>
            {
                poll === null ?
                    ''
                    :
                    <NavLink to={`${currentLessonURL}/poll/${poll?.uid}`}>
                        <div className="poll-btn">Перейти к опросу</div>
                    </NavLink>
            }
        </>
    )
}

export default Lesson;