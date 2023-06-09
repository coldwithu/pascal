import React, {useState, useEffect} from "react";
import './Slider.scss'
import slideImg from '../../assets/img/vasil.png'
import test1 from '../../assets/img/test1.jpg'
import test2 from '../../assets/img/test2.jpg'
import leftArrow from '../../assets/img/left.svg'
import rightArrow from '../../assets/img/right.svg'
const data = [
    {
        id: 1,
        image: slideImg,
        title: 'Электротехника - не скучный предмет',
        subTitle: 'Пройди обучение по лучшим лекциям'
    },
    {
        id: 2,
        image: test1,
        title: 'Lorem ipsum dolor sit amet',
        subTitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        id: 3,
        image: test2,
        title: 'Lorem ipsum dolor sit amet sit amet',
        subTitle: 'consectetur adipiscing elit, sed do eiusmod tempor'
    }
]
const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const lastIndex = data.length - 1;
        if(activeSlide < 0){
            setActiveSlide(lastIndex);
        }

        if(activeSlide > lastIndex){
            setActiveSlide(0);
        }
    }, [activeSlide]);

    useEffect(() => {
        let slider = setInterval( () => setActiveSlide(prevState => prevState + 1),5000);
        return () => {
            clearInterval(slider);
        }
    }, [activeSlide]);


    return(
        <div className='slider'>
            {
                data.map((item, index) => {
                    const {id, image, title, subTitle} = item;

                    let position = 'nextSlide';

                    if(index === activeSlide){
                        position = 'activeSlide';
                    }

                    if(index === activeSlide - 1 || (activeSlide === 0 && index === data.length - 1)){
                        position = 'lastSlide';
                    }

                    return(
                        <div className={`slide ${position}`} key={id}>
                            <div className='slide-content'>
                                <img src={image} alt='image' className='slide-content-img'/>
                            </div>
                            <div className='slide-wrapper'>
                                <h1>{title}</h1>
                                <p>{subTitle}</p>
                                <button>Подробнее</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='slider-controls'>
                <img src={leftArrow}
                     alt='left'
                     className='slider-controls-left'
                     onClick={() => setActiveSlide(prevState => prevState - 1)}
                />
                <img src={rightArrow}
                     alt='right'
                     className='slider-controls-right'
                     onClick={() => setActiveSlide(prevState => prevState + 1)}
                />
            </div>

        </div>
    )
}

export default Slider;