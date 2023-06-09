import React, {useState, useEffect} from "react";
import PollQuestion from "../Components/PollQuestion/PollQuestion";
import './Poll.scss'
import {useNavigate} from "react-router-dom";
import {BACKEND_SERVER} from "../constants/constants";
import {useLocation} from "react-router";

const Poll = () => {
    const [poll, setPoll ] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();
    const currentURL = useLocation().pathname.split('/');

    useEffect(() => {
        const getQuestions = () => {
            fetch(`${BACKEND_SERVER}programs/courses/${currentURL[2]}/lessons/${currentURL[4]}/poll/${currentURL[6]}/view/`)
                .then(response => response.json())
                .then(data => {
                    setPoll(data);
                });
            return true;
        }
        getQuestions();
    }, []);

    const handleEdit = () => {
        setEditMode(!editMode);
    }
    const sendData = () => {
        let data = [];
        const answers = document.querySelectorAll('input');
        // answers.forEach((answer) => {
        //     if(answer.type === 'checkbox' && answer.checked){
        //         console.log(answer.value);
        //     }
        // })
    }

    return(
        <div className="poll">
            <div className="poll__header">
                <div className='poll__header-left'>
                    <button className="btn" onClick={() => navigate(-1)}>Выход</button>
                    <h1 className='poll__header-title'>Опрос:</h1>
                </div>

                <button className="edit-btn" onClick={handleEdit}>{editMode ? 'Сохранить' : 'Редактировать'}</button>
            </div>

            {
                editMode ? (
                    <div className="poll__title-wrapper">
                        <input type='text' placeholder={poll.title}/>
                    </div>
                ) : (
                    <div className="poll__title-wrapper">
                        <h2 className="poll__title">{poll.title}</h2>
                    </div>
                )

            }
            {
                poll.questions?.map((question, index) =>
                    <PollQuestion
                        key={index}
                        {...question}
                        editMode={editMode}
                    />
                )
            }
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '50px'
            }}>
                <button
                    className='btn'
                    style={{width: '400px', padding: '10px'}}
                    onClick={sendData}
                >Отправить</button>
            </div>
        </div>
    )
}

export default Poll;