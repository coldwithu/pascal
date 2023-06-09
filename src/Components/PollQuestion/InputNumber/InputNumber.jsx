import React from "react";

const InputNumber = () => {
    return(
        <div className="poll-question">
            <h2>Ответ: </h2>
            <input type='number' className='poll-question__number' placeholder='Ответ number'/>
        </div>
    )
}
export default InputNumber;