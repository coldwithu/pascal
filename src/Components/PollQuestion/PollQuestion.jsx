import React, {useState} from "react";
import './PollQuestion.scss'
import Checkbox from "./Checkbox/Checkbox";
import RadioButton from "./RadioButton/RadioButton";
import InputNumber from "./InputNumber/InputNumber";
import InputText from "./InputText/InputText";
import arrow from '../../assets/img/arrow.svg';
import deleteBtn from '../../assets/img/delete.svg';

const PollQuestion = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const [type, setType] = useState(null);
    const changeType = (val) => {
        setType(val);
        setDropdown(!dropdown);
    }
    const handleClick = () => {
        setDropdown(!dropdown);
    }

    switch (props.question_type) {
        case 'single':
            return(
                <div className="question-body">
                    {
                        props.editMode ? (
                            <div className="edit-menu">
                                <div className='edit-menu-wrapper'>
                                    <h1>Тип вопроса:</h1>
                                    <div className="edit-menu-wrapper__dropdown">
                                        <span onClick={handleClick}>{type === null ? 'Одиночный ответ' : type}</span>
                                        <img onClick={handleClick} src={arrow} style={{rotate: `${dropdown ? '270deg' : '90deg'}`}}/>
                                        <ul style={{display: `${dropdown ? 'block' : 'none'}`}}>
                                            <li onClick={() => changeType('Одиночный ответ')}>Одиночный ответ</li>
                                            <li onClick={() => changeType('Множественный ответ')}>Множественный ответ</li>
                                            <li onClick={() => changeType('Текстовый ответ')}>Текстовый ответ</li>
                                            <li onClick={() => changeType('Числовой ответ')}>Числовой ответ</li>
                                        </ul>

                                    </div>
                                </div>
                                <button className='delete-btn'>
                                    <img src={deleteBtn}/>
                                </button>
                            </div>
                        ) : (
                            ''
                        )
                    }
                    <h1>{props.title}</h1>
                    <div className="answers">
                        {props.answers.map((item, index) => (
                            <RadioButton key={index} {...item} name={props.uid}/>
                        ))}
                    </div>
                </div>
            )
        case 'multiple':
            return(
                <div className="question-body">
                    {
                        props.editMode ? (
                            <div className="edit-menu">
                                <div className='edit-menu-wrapper'>
                                    <h1>Тип вопроса:</h1>
                                    <div className="edit-menu-wrapper__dropdown">
                                        <span onClick={handleClick}>{type === null ? 'Множественный ответ' : type}</span>
                                        <img onClick={handleClick} src={arrow} style={{rotate: `${dropdown ? '270deg' : '90deg'}`}}/>
                                        <ul style={{display: `${dropdown ? 'block' : 'none'}`}}>
                                            <li onClick={() => changeType('Одиночный ответ')}>Одиночный ответ</li>
                                            <li onClick={() => changeType('Множественный ответ')}>Множественный ответ</li>
                                            <li onClick={() => changeType('Текстовый ответ')}>Текстовый ответ</li>
                                            <li onClick={() => changeType('Числовой ответ')}>Числовой ответ</li>
                                        </ul>

                                    </div>
                                </div>
                                <button className='delete-btn'>
                                    <img src={deleteBtn}/>
                                </button>
                            </div>
                        ) : (
                            ''
                        )
                    }
                    <h1>{props.title}</h1>
                    <div className="answers">
                        {props.answers.map((item, index) => (
                            <Checkbox key={index} {...item}/>
                        ))}
                    </div>
                </div>
            )
        case 'number':
            return(
                <div className="question-body">
                    {
                        props.editMode ? (
                            <div className="edit-menu">
                                <div className='edit-menu-wrapper'>
                                    <h1>Тип вопроса:</h1>
                                    <div className="edit-menu-wrapper__dropdown">
                                        <span onClick={handleClick}>{type === null ? 'Числовой ответ' : type}</span>
                                        <img onClick={handleClick} src={arrow} style={{rotate: `${dropdown ? '270deg' : '90deg'}`}}/>
                                        <ul style={{display: `${dropdown ? 'block' : 'none'}`}}>
                                            <li onClick={() => changeType('Одиночный ответ')}>Одиночный ответ</li>
                                            <li onClick={() => changeType('Множественный ответ')}>Множественный ответ</li>
                                            <li onClick={() => changeType('Текстовый ответ')}>Текстовый ответ</li>
                                            <li onClick={() => changeType('Числовой ответ')}>Числовой ответ</li>
                                        </ul>

                                    </div>
                                </div>
                                <button className='delete-btn'>
                                    <img src={deleteBtn}/>
                                </button>
                            </div>
                        ) : (
                            ''
                        )
                    }
                    <h1>{props.title}</h1>
                    <div className="answers">
                        <InputNumber/>
                    </div>
                </div>
            )
        case 'text':
            return(
                <div className="question-body">
                    {
                        props.editMode ? (
                            <div className="edit-menu">
                                <div className='edit-menu-wrapper'>
                                    <h1>Тип вопроса:</h1>
                                    <div className="edit-menu-wrapper__dropdown">
                                        <span onClick={handleClick}>{type === null ? 'Текстовый ответ' : type}</span>
                                        <img onClick={handleClick} src={arrow} style={{rotate: `${dropdown ? '270deg' : '90deg'}`}}/>
                                        <ul style={{display: `${dropdown ? 'block' : 'none'}`}}>
                                            <li onClick={() => changeType('Одиночный ответ')}>Одиночный ответ</li>
                                            <li onClick={() => changeType('Множественный ответ')}>Множественный ответ</li>
                                            <li onClick={() => changeType('Текстовый ответ')}>Текстовый ответ</li>
                                            <li onClick={() => changeType('Числовой ответ')}>Числовой ответ</li>
                                        </ul>

                                    </div>
                                </div>
                                <button className='delete-btn'>
                                    <img src={deleteBtn}/>
                                </button>
                            </div>
                        ) : (
                            ''
                        )
                    }
                    <h1>{props.title}</h1>
                    <div className="answers">
                        <InputText/>
                    </div>
                </div>
            )
    }
}

export default PollQuestion;