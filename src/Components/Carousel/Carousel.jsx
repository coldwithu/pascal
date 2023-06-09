import React, {useEffect, useState} from "react";
import './Carousel.scss';
import ProfileStatsCard from "../ProfileStatsCard/ProfileStatsCard";

const Carousel = () => {
    const [position, setPosition] = useState(0);

    const handleClickRight = () => {
        if(position > -1000){
            setPosition(position - 390);
        }
    }
    const handleClickLeft = () => {
        if(position < 0){
            setPosition(position + 390);
        }
    }

    useEffect(() => {
    }, [position]);

    return(
        <div className='carousel'>
            <button className='carousel__left' onClick={() => handleClickLeft()}> {'<'} </button>
            <div className='carousel-visible' style={{transform: `translateX(${position}px)`}}>
                <ProfileStatsCard progress={50}/>
                <ProfileStatsCard progress={25}/>
                <ProfileStatsCard progress={78}/>
                <ProfileStatsCard progress={100}/>
            </div>
            <button className={'carousel__right'} onClick={() => handleClickRight()} role='right-buttton'> {'>'} </button>
        </div>
    )
}
export default Carousel