import React from "react";
import './Courses.css';
import arrow from '../assets/img/arrow.svg'
import search_btn from '../assets/img/search-bar.svg'
import {NavLink} from "react-router-dom";
import axios from 'axios'
import Card from "../Components/Card/Card";

const testFun = () => {
    fetch('http://localhost:8000/api/courses/').then(response => response.json())
        .then(data => console.log(data));
}

const Courses = () => {
    return(
        <>
            <div className="links">
                <NavLink to="/education">Обучение</NavLink>
                <img src={arrow} alt="arrow img"/>
                <NavLink to="/courses">Программы и курсы</NavLink>
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

                <div className="courses-themes">
                    <div className="courses-themes__theme">
                        <p>Уровневые программы</p>
                        <p>Мягкие навыки</p>
                        <p>Цифровые навыки</p>
                        <p>Професиональные навыки</p>
                        <p>Специализированные навыки</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Courses;