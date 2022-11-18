import React from "react";
import './Courses.scss';
import arrow from '../assets/img/arrow.svg'
import search_btn from '../assets/img/search-bar.svg'
import {NavLink} from "react-router-dom";

import Card from "../Components/Card/Card";

const testFun = () => {
    fetch('http://localhost:8000/api/courses/').then(response => response.json())
        .then(data => console.log(data));
}

const Courses = () => {
    return(
        <>
            <div className="links">
                <NavLink to="/education" className="link">Обучение</NavLink>
                <img src={arrow} alt="arrow img"/>
                <NavLink to="/courses" className="link">Программы и курсы</NavLink>
            </div>

            <p className="courses-title">Программы и курсы</p>

            <div className="courses__inner">
                <div className="courses__inner-container">
                    <div className="search-bar">
                        <button onClick={testFun} className="search-bar-btn">
                            <img src={search_btn} alt="search img"/>
                        </button>
                        <input className="search-bar-input" type="text" placeholder="Поиск программ и курсов"/>
                    </div>

                    <div className="programs">
                        <h2>Уровневые программы</h2>
                        <p id="programs__counter">27</p>
                    </div>

                    <div className="courses__cards">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
                <div className="left-side">
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