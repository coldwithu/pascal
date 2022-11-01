import React from "react";
import './Card.css'
import {NavLink} from "react-router-dom";


const Card = () => {
    return(
        <div className="card">
            <NavLink to="/course">

                {/*<img src={img-src} alt={"course img"} className={"card__img"}/>*/}
                <div className="card__container">
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