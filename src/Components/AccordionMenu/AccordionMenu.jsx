import React from "react";
import './AccordionMenu.scss'
import AccordionSection from "./AccordionSection";
import db from '../../assets/db.json'

const AccordionMenu = ({lessons}) => {
    // console.log(lessons);
    return(
        <div className="accordion-menu">
            {
                // db.map((item, index) =>
                //     <AccordionSection
                //         key={index}
                //         inner={item}
                //     />)
                <AccordionSection
                    inner = {lessons}
                />
            }
        </div>
    )
}

export default AccordionMenu;