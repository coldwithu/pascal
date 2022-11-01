import React from "react";
import './Header.css'
// import logo from "../../assets/img/logo.svg";
import logo from "../../assets/img/logo.svg"
import langSwitch from "../../assets/img/lang-switch-img.svg";
import search from "../../assets/img/search.svg";
import {NavLink} from 'react-router-dom';



const Header = () => {
    return(

        <div className="header">
            <div className="container">
                <div className="header__inner">

                    <NavLink className="header__logo" to="/home">
                        <img src={logo} alt="logo img"/>
                        <p className="header__logo-title">ПАСКАЛЬ</p>
                    </NavLink>

                    <nav className="nav">
                        <NavLink className="nav__link" to="/education">Обучение</NavLink>
                        <NavLink className="nav__link" to="/courses">Программы и курсы</NavLink>
                        <NavLink className="nav__link" to="/knowledge">База знаний</NavLink>
                    </nav>

                    <div className="header__other">
                        <div className="lang-menu">
                            <div className="selected-lang">
                                <span>Ru</span>
                                <img className="selected-lang" src={langSwitch} alt="switch img"/>
                            </div>
                            <ul>
                                <li>
                                    <a href="/src/Pages/Home.jsx">Ru</a>
                                </li>
                                <li>
                                    <a href="/src/Pages/Home.jsx">En</a>
                                </li>
                            </ul>
                        </div>
                        <img className="header__other-search-img" src={search} alt="search img"/>
                        <button className="login-btn">Вход</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;