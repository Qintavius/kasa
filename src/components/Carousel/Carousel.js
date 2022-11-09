import React from 'react';
import { useState } from 'react';
import './Carousel.scss';

const Carousel = (props) => {

    let [currentImg, setCurrentImg] = useState(0);

    const next = () => {
        setCurrentImg(currentImg = currentImg + 1)

        if (currentImg + 1 > props.img.length) {
            setCurrentImg(0)
        }
    }

    const prev = () => {
        setCurrentImg(currentImg = currentImg - 1)
        console.log(currentImg);
        if (currentImg < 0) {
            setCurrentImg(props.img.length - 1)
            return
        }
    }

    return (
        <div className="carousel-wrapper">
            <div className="carousel-inner">
                <img className='current-img' src={props.img && props.img[currentImg]} />
            </div>

            <button className={`prev-button ${(props.img && props.img.length === 1)}`} onClick={prev}>
                <img src="../caretCarousel.png" alt="bouton précédent" />
            </button>
            <button className={`next-button ${(props.img && props.img.length === 1)}`} onClick={next}>
                <img src="../caretCarousel.png" alt="bouton suivant" />
            </button>
        </div>
    );
};

export default Carousel;