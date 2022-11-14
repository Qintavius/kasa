import './Rating.scss';
import fullStar from '../../assets/fullStar.svg';
import emptyStar from '../../assets/emptyStar.svg';

const Rating = (props) => {

    const ratingString = [];

    for (let i = 0; i < props.rating; i++) {
        ratingString.push(
            <img key={"Rating" + i} className="rating-full" src={fullStar} alt={'nombre étoiles ' + props.rating}></img>);
    }

    for (let i = props.rating; i < 5; i++) {
        ratingString.push(
            <img key={"Rating" + i} className="rating-empty" src={emptyStar} alt={'nombre étoiles ' + props.rating}></img>);
    }

    return (
        <div className="rating">
            {ratingString}
        </div>
    );
};

export default Rating;