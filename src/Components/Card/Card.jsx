import React from "react";
import './Card.scss'
import cardImg from '../../assets/img/card.png'
import {NavLink} from "react-router-dom";


const Card = () => {
    return(
        <div className="card">
            <NavLink to="course1">
                <div className="card__container">
                    <img src={cardImg} alt={"course img"} className={"card__img"}/>
                    <p className={"card__title"}>Школа начинающего технаря</p>
                    <p className={"card__description"}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                    </p>
                    <p className={"card__course-members"}>Сейчас изучает 20 человек</p>
                </div>

            </NavLink>
        </div>
    )
}

export default Card;