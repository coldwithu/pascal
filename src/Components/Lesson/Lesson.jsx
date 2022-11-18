import React from "react";
import './Lesson.scss'
import Player from "../Player/Player";


const Lesson = ({title, description}) => {
    return(
        <>
            <h1 className="lesson-title">
                {title}
            </h1>
            <div className="lesson-video">
                <Player/>
            </div>

            <p className="lesson-text">
                {description}
            </p>
        </>
    )
}

export default Lesson;