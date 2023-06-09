import React from "react";

const RadioButton = (props) => {
    return(
        <div className="poll-question">
            <input type='radio' className='poll-question__radio' name={props.name} value={props.answer}/>
            <label>{props.answer}</label>
        </div>
    )
}
export default RadioButton;