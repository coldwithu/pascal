import React from "react";

const InputText = () => {
    return(
        <div className="poll-question">
            <h2>Ответ: </h2>
            <input type='text' className='poll-question__text' placeholder='Ответ text'/>
        </div>
    )
}
export default InputText;