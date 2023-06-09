import React from "react";
import './ProfileStatsCard.scss'
import ProgressBar from "./ProgressBar/ProgressBar";

const ProfileStatsCard = ({progress}) => {
    return(
        <div className='stats-card'>
            <div className='stats-card__text'>
                <h1 className='stats-title'>Школа начинающего технаря</h1>
                <p style={{color: '#33363A'}}>Изучается 3 недели</p>
            </div>
            {/*<div className='stats-card__diagram'>*/}
            {/*    */}
            {/*</div>*/}
            <ProgressBar
                progress={progress}
            />

        </div>
    )
}

export default ProfileStatsCard;