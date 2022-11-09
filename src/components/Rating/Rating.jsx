import React from 'react';
import './Rating.scss';

const Rating = (props) => {

    const ratingString = [];

    for (let i = 0; i < props.rating; i++) {
        ratingString.push(
            <img key={"Rating" + i} className="rating-full" src='../fullStar.svg' alt={'nombre étoiles ' + props.rating}></img>);
    }

    for (let i = props.rating; i < 5; i++) {
        ratingString.push(
            <img key={"Rating" + i} className="rating-empty" src='../emptyStar.svg' alt={'nombre étoiles ' + props.rating}></img>);
    }

    return (
        <div className="rating">
            {ratingString}
        </div>
    );
};

export default Rating;