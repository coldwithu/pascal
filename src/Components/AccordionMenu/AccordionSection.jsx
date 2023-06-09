import React, {useState} from "react";
import './AccordionSection.scss'
import arrow from "../../assets/img/lang-switch-img.svg"
import {NavLink} from "react-router-dom";

const AccordionSection = ({inner}) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

    const showContent = () => {
        if(active){
            return('block')
        }
        else
            return('none')
    }

    return(
        <div className="accordion-section">
            <div className="accordion-section__inner">
                <div className="accordion-section__title" onClick={handleClick}>
                    <h1>Test group</h1>
                    <img className={`accordion-section__title-img ${active ? 'active': ''}`} src={arrow} alt="arrow img"/>
                </div>

                <div style={{display: `${showContent()}`}}>
                    {
                        inner.map((item, index) =>
                            <NavLink
                                key={index}
                                to={item.uid}
                                className="accordion-section__item"
                            >
                                {item.title}
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AccordionSection;