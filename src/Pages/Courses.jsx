import React from "react";
import './Courses.scss';
import arrow from '../assets/img/arrow.svg'
import search_btn from '../assets/img/search-bar.svg'
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

import Card from "../Components/Card/Card";
import {BACKEND_SERVER} from "../constants/constants";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const getCourses = () => {
        fetch(`${BACKEND_SERVER}programs/courses/`)
            .then(response => response.json())
            .then(data => {
                setCourses(data);
            });
    }

    const coursesCountRest = () => {
        let ghostCardDisplay = "none";
        let lastRowCount = courses.length % 3;
        if(lastRowCount === 2){
            ghostCardDisplay = "block";
        }
        return ghostCardDisplay;
    }
    const log = () => {
        console.log('Log: Courses catalog created');
        console.info('Log: All courses cards was rendered');
        console.warn('Warning: add description for course "Электротехника. Продвинутый курс"');
        console.warn('Warning: add description for course "Основы дискретной математики"');
        console.info('Count of courses:', courses.length);
        console.error('Error: bad response');
    }
    useEffect(() => {
        getCourses();
    },[]);

    return(
        <>
            <div className="links">
                <NavLink to="/education" className="link">Обучение</NavLink>
                <img src={arrow} alt="arrow img"/>
                <NavLink to="/courses" className="link">Программы и курсы</NavLink>
            </div>

            <p className="courses-title" onClick={log}>Программы и курсы</p>

            <div className="courses__inner">
                <div className="courses__inner-container">
                    <div className="search-bar">
                        <button className="search-bar-btn">
                            <img src={search_btn} alt="search img"/>
                        </button>
                        <input className="search-bar-input" type="text" placeholder="Поиск программ и курсов"/>
                    </div>

                    <div className="programs">
                        <h2>Уровневые программы</h2>
                        <p id="programs__counter">{courses.length}</p>
                    </div>

                    <div className="courses__cards">
                        {courses.map((item, index) => (
                            <Card
                                key = {index}
                                id = {item.uid}
                                title = {item.title}
                                description = {item.description_short}
                            />
                        ))}
                        <div className="courses__cards-ghost" style={{display: coursesCountRest()}}></div>
                    </div>
                </div>
                <div className="left-side">
                    <p className='add'>Добавить курс</p>
                    <div className="courses-themes">
                        <div className="courses-themes__theme">
                            <div className="theme">
                                <p>Уровневые программы</p>
                                <div className="theme__count">27</div>
                            </div>
                            <div className="theme">
                                <p>Мягкие навыки</p>
                                <div className="theme__count">54</div>
                            </div>
                            <div className="theme">
                                <p>Цифровые навыки</p>
                                <div className="theme__count">18</div>
                            </div>
                            <div className="theme">
                                <p>Професиональные навыки</p>
                                <div className="theme__count">10</div>
                            </div>
                            <div className="theme">
                                <p>Специализированные навыки</p>
                                <div className="theme__count">5</div>
                            </div>
                        </div>
                        <button>Развернуть все темы</button>
                    </div>
                    <div className="questions">
                        <div className="questions__icon">
                        </div>

                        <div className="questions__text">
                            <h1>Остались вопросы?</h1>
                            <p>Обратитесь в службу поддержки и мы поможем найти ответ</p>
                        </div>

                        <div className="questions__button">
                            <a href="mailto:pascal@gmail.com">Задать вопрос</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;