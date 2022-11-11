import React from 'react';
import { useState } from 'react';
import './Dropdown.scss';

const DropdownAbout = (props) => {

    const [show, setShow] = useState(false);

    return (

        <div className='dropdown-about-wrapper'>
            <div className="dropdown">{props.title}
                <button type='button' onClick={() => setShow(!show)}>
                    {show === true ? <img className='caret caret-open' src="../caret.svg" alt="voir" /> : <img className='caret caret-close' src="../caret.svg" alt="masquer" />}
                </button>
            </div>
            {show && <div className="dropdown-content">
                <p>{props.content}</p>
            </div>}
        </div>
    );
};

export default DropdownAbout;