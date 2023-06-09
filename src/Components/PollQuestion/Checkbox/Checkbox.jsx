import React from "react";

const Checkbox = (props) => {
    return(
        <div className="poll-question">
            <input type='checkbox' className='poll-question__checkbox' value={props.answer}/>
            <label>{props.answer}</label>
        </div>
    )
}
export default Checkbox;