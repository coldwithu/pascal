import React, {useState} from "react";
import './Header.scss'

import logo from "../../assets/img/logo.svg"
import langSwitch from "../../assets/img/lang-switch-img.svg";
import search from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";
import {NavLink} from 'react-router-dom';


const Header = () => {
    const [findIcon, setFindIcon] = useState(search);
    const handleClick = () => {
        findIcon === search ? setFindIcon(close) : setFindIcon(search);
    }
    return(

        <div className="header">
            <div className="container">
                <div className="header__inner">

                    <NavLink className="header__logo" to="/home">
                        <img src={logo} alt="logo img"/>
                        <p className="header__logo-title">ПАСКАЛЬ</p>
                    </NavLink>

                    <nav className="nav">
                        <NavLink className={"nav__link"} to="/education">Обучение</NavLink>
                        <NavLink className={"nav__link"} to="/courses" >Программы и курсы</NavLink>
                        <NavLink className={"nav__link"} to="/knowledge" >База знаний</NavLink>
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
                        <div className="header__other-search">
                            <img className="header__other-search-img" src={findIcon} alt="search img" onClick={handleClick}/>
                            <div className={findIcon === close ? 'header__other-search-bar active' : 'header__other-search-bar'}>
                                <input type='text' placeholder="Поиск" id="searchInput"/>
                            </div>
                        </div>
                        <button className="login-btn">Вход</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;