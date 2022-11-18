import React, {useState} from "react";
import editIcon from "../../assets/img/edit.svg"
import "./CurrentCourse.scss"
import privacyIcon from '../../assets/img/privacy.svg'
import {NavLink} from "react-router-dom";




const CurrentCourse = () => {
    const [checked, setChecked] = useState(1);

    return(
        <div className="current-course">
            <div className="container">
                <div className="current-course__head">
                    <div className="current-course__head-container">
                        <button>
                            <img src={editIcon} alt="attach img"/>
                        </button>
                        <h1>Профессиональные навыки</h1>
                        <h2>Папаскаль 2.2</h2>
                        <hr/>

                        <div className="current-course__head-info">
                            <div className="sections">
                                <div className="section">
                                    <input
                                        className="custom-radio"
                                        type="radio" id="section-1"
                                        name="section"
                                        defaultChecked={true}
                                        value="program"
                                        onClick={() => setChecked(1)}
                                    />
                                    <label id="labelID" htmlFor="section-1">О программе</label>
                                </div>

                                <div className="section">
                                    <input
                                        className="custom-radio"
                                        type="radio"
                                        id="section-2"
                                        name="section"
                                        value="education"
                                        onClick={() => setChecked(2)}
                                    />
                                    <label id="labelID" htmlFor="section-2">Обучение</label>
                                </div>
                            </div>
                            <div className="info">
                                <div className="status">
                                    <span>Статус:</span>
                                    <p>Я не п.....к</p>
                                </div>
                                <div className="privacy">
                                    <span>Приватность:</span>
                                    <img src={privacyIcon} alt="privacy Icon"/>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="course-description">
                    <div className="course-description-text" id="program-description">
                        {
                            checked === 1
                                ?
                                <div id="content-1">
                                    <h1>Общее описание</h1>
                                    <p>Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.
                                        Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.
                                        Эта парадигматическая страна.</p>

                                    <h1>Для кого программа</h1>
                                    <p>Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.
                                        Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.
                                        Эта парадигматическая страна.</p>
                                </div>
                                :
                                <div id="content-2">
                                    <h1>Общее описание 2</h1>
                                    <p>Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.
                                        Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.
                                        Эта парадигматическая страна.Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.
                                        Эта парадигматическая страна.</p>

                                    <h1>Для кого программа 2</h1>
                                    <p>Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.
                                        Маленький ручеек </p>
                                </div>
                        }
                    </div>


                    <div className="course-description-sidebar">
                        <div className="flex-content">
                            <p id="title">Формат</p>
                            <p id="value">Электронный</p>
                        </div>
                        <div className="flex-content">
                            <p id="title">Раздел</p>
                            <p id="value">Элтех-сила</p>
                        </div>

                        <div className="flex-content">
                            <NavLink to={"lessons"}>
                                <button className="description-button">Перейти к обучению</button>
                            </NavLink>
                            <div className="icon"></div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentCourse;