import React, {useEffect, useState} from "react";
import "./ProfilePage.scss"
import editSVG from "../assets/img/edit.svg";
import mietLogo from "../assets/img/miet-logo.svg";
import Carousel from "../Components/Carousel/Carousel";

const ProfilePage = () => {
    // const [cardSide, setCardSide] = useState(true);
    //
    // const handleClick = () => {
    //     if(cardSide){
    //         document.querySelector('.profile-header__card-front').classList.remove('active');
    //         document.querySelector('.profile-header__card-front').classList.add('hidden');
    //         document.querySelector('.profile-header__card-back').classList.remove('hidden');
    //         document.querySelector('.profile-header__card-back').classList.add('active');
    //         setCardSide(false);
    //     }
    //     else {
    //         document.querySelector('.profile-header__card-front').classList.remove('hidden');
    //         document.querySelector('.profile-header__card-front').classList.add('active');
    //         document.querySelector('.profile-header__card-back').classList.remove('active');
    //         document.querySelector('.profile-header__card-back').classList.add('hidden');
    //         setCardSide(true);
    //     }
    // }
    // useEffect(() => {}, [cardSide])
    return(
        <>
            <div className="profile-header">
                <div className="profile-header__card">
                    <div className='profile-header__card-front'>
                        <img src={mietLogo} alt={'miet-logo'}/>
                        <div className='profile-header__avatar'>
                        </div>
                        <h1>John Doe</h1>
                        <h2>ИВТ-21</h2>
                        <h1>8211345</h1>
                    </div>
                    <div className='profile-header__card-back'>
                    </div>
                </div>
                <div className="profile-header__email">
                    <div className="profile-header__email-input">
                        <input type="email" name="email" placeholder="E-mail"/>
                        <button>
                            <img src={editSVG} alt="edit" className="edit-img"/>
                        </button>
                    </div>
                    <button className="profile-header__email-submit-btn">Подтвердить</button>
                </div>
            </div>
            <div className='profile-programs'>
                <div className='profile-programs__item'>
                    <div className='profile-programs__item-header'>
                        <h1 className='profile-title'>Мои программы и курсы</h1>
                        <button className='profile-btn'>Показать все</button>
                    </div>

                    <div className='profile-programs__item-slider'>
                        <Carousel/>
                    </div>
                </div>
                <div className='profile-programs__item'>
                    <div className='profile-programs__item-header'>
                        <h1 className='profile-title'>Мои книги и гайды</h1>
                        <button className='profile-btn'>Показать все</button>
                    </div>

                    <div className='profile-programs__item-slider'>
                        <Carousel/>
                    </div>
                </div>

                <div className='profile-programs__item'>
                    <div className='profile-programs__item-header'>
                        <h1 className='profile-title'>Достижения</h1>
                        <button className='profile-btn'>Показать все</button>
                    </div>

                    <div className='profile-programs__item-slider'>
                        Slider
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;