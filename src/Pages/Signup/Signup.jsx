import React from "react";
import './Signup.scss'
import logo from '../../assets/img/logo.svg';

const Signup = () => {
    return(
        <div className='signup'>
            <div className='signup-form'>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                    <p>ПАСКАЛЬ</p>
                </div>

                <p className='signup-form__title'>Регистрация на платформе</p>

                <div className='signup-form__inputs'>
                    <input type='text' placeholder='Введите имя'/>
                    <input type='text' placeholder='Введите фамилию'/>
                    <input type='email' placeholder='Введите адрес электронной почты'/>
                    <input type='password' placeholder='Придумайте пароль'/>
                    <input type='password' placeholder='Подтвердите пароль'/>
                </div>

                <div className='signup-form__buttons'>
                    <button className='signup-form__buttons-signup'>Зарегистрироваться</button>
                    <button className='signup-form__buttons-auth'>Авторизироваться</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;