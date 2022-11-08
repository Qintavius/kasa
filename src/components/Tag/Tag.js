import React from 'react';
import './Tag.scss';

const tag = (house) => {
    return (
        <div className='house-tag'>
            {house.tags}
        </div>
    );
};

export default tag;