import React from 'react';
import { useState } from 'react';
import './Dropdown.scss';

const DropdownDescription = (props) => {

    const [show, setShow] = useState(true);

    return (
        <div className='dropdown-wrapper'>
            <div className="dropdown">description
                <button type='button' onClick={() => setShow(!show)}>
                    {show === true ? <img className='caret caret-open' src="../caret.svg" alt="voir les équipements" /> : <img className='caret caret-close' src="../caret.svg" alt="masquer les équipements" />}
                </button>
            </div>
            {show && <div className="dropdown-content">
                <p>{props.description}</p>
            </div>}
        </div>
    );
};

export default DropdownDescription;