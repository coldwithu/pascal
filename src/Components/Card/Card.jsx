import React from "react";
import './Card.scss'
import cardImg from '../../assets/img/card.png'
import {NavLink} from "react-router-dom";


const Card = ({title, description, id}) => {
    return(
        <div className="card">
            <NavLink to={`${id}`}>
                <div className="card__container">
                    <img src={cardImg} alt={"course img"} className={"card__img"}/>
                    <p className={"card__title"}>{title}</p>
                    <p className={"card__description"}>{description}</p>
                    <p className={"card__course-members"}>Сейчас изучает 20 человек</p>
                </div>
            </NavLink>
        </div>
    )
}

export default Card;