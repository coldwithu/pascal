import React, {useState} from "react";
import "./CurrentCourse.scss"

const Section = ({title, id, active}) => {
    const [isActive, setIsActive] = useState(active);

    // const cls =['section']
    //
    // if(isActive){
    //     cls.push('active')
    // }
    return(
        <div key={id} className={isActive ? 'section active': 'section'}
             onClick={() => setIsActive(!isActive)}
        >
            <span>{title}</span>
        </div>

    )
}

export default Section;