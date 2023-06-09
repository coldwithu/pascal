import React, {useState, useEffect} from "react";
import editIcon from "../../assets/img/edit.svg"
import "./CurrentCourse.scss"
import privacyIcon from '../../assets/img/privacy.svg'
import {NavLink} from "react-router-dom";
import {BACKEND_SERVER} from "../../constants/constants";
import {useLocation} from "react-router";


const CurrentCourse = () => {
    const [checked, setChecked] = useState(1);
    const [courseInfo, setCourseInfo] = useState([]);
    const [startLesson, setStartLesson] = useState(null);
    const currentURL = useLocation().pathname.split("/")[2];
    const fetchURL = `${BACKEND_SERVER}programs/courses/${currentURL}/`;
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescriptionShort, setNewDescriptionShort] = useState('');

    const onEditMode = () => {
        if(editMode && window.confirm('Вы действительно хотите выйти из режима редактирования? Данные останутся без изменения.')){
            setEditMode(false);
            setNewTitle(courseInfo.title);
            setNewDescriptionShort(courseInfo.description_short);
        }else if (!editMode){
            setEditMode(true);
        }
    }
    const getCourseInfo = () => {
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                setCourseInfo(data);
            });
    }
    const getStartLesson = () => {
        fetch(`${fetchURL}view/`)
            .then(response => response.json())
            .then(data => {
                setStartLesson(data.lessons[0].uid);
            });
    }
    useEffect(() => {
        getStartLesson();
        getCourseInfo();
    },[]);

    const onEditTitle = (value) => {
        if(value.length === 0){
            setNewTitle(' ');
        }else if (value[0] === ' '){
            value = value.substring(1);
            setNewTitle(value);
        }else {
            setNewTitle(value);
        }

        console.log(newTitle);
    }
    const onDescriptionShort = (value) => {
        if(value.length === 0){
            setNewDescriptionShort(' ');
        }else if (value[0] === ' '){
            value = value.substring(1);
            setNewDescriptionShort(value);
        }else {
            setNewDescriptionShort(value);
        }
        console.log(newDescriptionShort);
    }

    const updateData = () => {
        let newCourseInfo = courseInfo;
        newTitle !== '' ? newCourseInfo.title = newTitle : newCourseInfo.title = courseInfo.title;
        newDescriptionShort !== '' ? newCourseInfo.description_short = newDescriptionShort : newCourseInfo.description_short = courseInfo.description_short;

        fetch(fetchURL, {
            method: 'PATCH',
            body: JSON.stringify({
                title: newTitle,
                description_short: newDescriptionShort
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((json) => {
                console.log(json);
                setEditMode(false);
            });
    }
    return(
        <div className="current-course">
            <div className="container">
                <div className="current-course__head">
                    <div className="current-course__head-container">
                        <button onClick={onEditMode}>
                            <img src={editIcon} alt="edit img"/>
                        </button>
                        <h1>Профессиональные навыки</h1>
                        {
                            editMode ? (
                                <input className='current-course__head-container__h2-input'
                                       type="text"
                                       value={newTitle ? newTitle : courseInfo.title}
                                       onChange={(e) => onEditTitle(e.target.value)}
                                />
                            ) : (
                                <h2>{courseInfo.title}</h2>
                            )
                        }
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
                                    {
                                        editMode ? (
                                            <textarea className='course-description-text-p-input'
                                                      rows={6}
                                                      value={newDescriptionShort ? newDescriptionShort : courseInfo.description_short}
                                                      onChange={(e) => onDescriptionShort(e.target.value)}
                                            />
                                        ) : (
                                            <p>{courseInfo.description_short}</p>
                                        )
                                    }
                                    <h1>Для кого программа</h1>
                                    {
                                        editMode ? (
                                            <textarea className='course-description-text-p-input' rows={6} placeholder={courseInfo.description_short}/>
                                        ) : (
                                            <p>{courseInfo.description_short}</p>
                                        )
                                    }

                                </div>
                                :
                                <div id="content-2">
                                    <h1>Обучение</h1>
                                    {
                                        editMode ? (
                                            <textarea className='course-description-text-p-input' rows={8} placeholder={courseInfo.description_raw}/>
                                        ) : (
                                            <p>{courseInfo.description_raw}</p>
                                        )
                                    }
                                    <h1>Особенности курса</h1>
                                    {
                                        editMode ? (
                                            <textarea className='course-description-text-p-input' rows={8} placeholder={courseInfo.description_raw}/>
                                        ) : (
                                            <p>{courseInfo.description_raw}</p>
                                        )
                                    }
                                </div>
                        }
                    </div>

                    <div>
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
                                <NavLink to={`lessons/${startLesson}`}>
                                    <button className="description-button">Перейти к обучению</button>
                                </NavLink>
                                <div className="icon"></div>
                            </div>
                        </div>

                        {
                            editMode ? (
                                <button
                                    className='edit-btn edit-course'
                                    onClick={() => updateData()}
                                >Сохранить</button>
                            ) : (
                                ''
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentCourse;