import React from "react";
import './AccordionMenu.scss'
import AccordionSection from "./AccordionSection";
import db from '../../assets/db.json'

const AccordionMenu = () => {
    return(
        <div className="accordion-menu">
            {
                db.map((item, index) =>
                    <AccordionSection
                        key={index}
                        inner={item}
                    />)
            }
        </div>
    )
}

export default AccordionMenu;