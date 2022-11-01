import React from "react";
import './Footer.css';
import footerArrow from '../../assets/img/footer-arrow.svg'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="contacts">
                        <p className="contacts-p">Контакты</p>
                        <div className="contacts__cards">
                            <div className="contact__card">
                                <span>По вопросам обучения:</span>
                                <a href="tel:+74956665544">+7 (495) 666-55-44</a>
                                <a href="mailto:pascal@gmail.com">pascal@gmail.com</a>

                            </div>
                            <div className="contact__card">
                                <span>По вопросам сотрудничества:</span>
                                <a href="tel:+74956665544">+7 (495) 666-55-44</a>
                                <a href="mailto:pascal@gmail.com">pascal@gmail.com</a>

                            </div>
                            <div className="contact__card">
                                <span>Тех. поддержка:</span>
                                <a href="tel:+74956665544">+7 (495) 666-55-44</a>
                                <a href="mailto:grikob@yandex.ru">grikob@yandex.ru</a>

                            </div>
                            <div className="contact__card">
                                <span>Еще какая-то мандула:</span>
                                <a href="mailto:grikob@yandex.ru">grikob@yandex.ru</a>

                            </div>
                        </div>

                    </div>

                    <div className="address">
                        <div className="address__data">
                            <p className="contacts-p">Наш адрес</p>
                            <span>г. Зеленоград, пл. Шокина, 1</span>
                            <a href="https://yandex.ru/maps/-/CCUZNWv-wB">
                                <p>Показать на карте</p>
                                <img src={footerArrow} alt="arrow img"/>
                            </a>


                        </div>
                        <div className="ellipses">
                            <div className="ellipse"></div>
                            <div className="ellipse"></div>
                            <div className="ellipse"></div>
                        </div>

                    </div>

                </div>
            </div>


        </footer>
    )
}

export default Footer;