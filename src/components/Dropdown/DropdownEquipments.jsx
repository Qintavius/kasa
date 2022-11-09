import React from 'react';
import { useState } from 'react';
import './Dropdown.scss';

const DropdownEquipments = (props) => {

    const [show, setShow] = useState(true);

    return (
        <div className='dropdown-wrapper'>
            <div className="dropdown">équipements
                <button type='button' onClick={() => setShow(!show)}>
                    {show === true ? <img className='caret caret-open' src="../caret.png" alt="voir les équipements" /> : <img className='caret caret-close' src="../caret.png" alt="masquer les équipements" />}
                </button>
            </div>
            {show && <div className="dropdown-content">
                <ul>
                    {
                        props.equipments && props.equipments.map((equip, index) => {
                            return <li className='equipment' key={'equipment' + index}>{equip}</li>
                        })
                    }
                </ul>
            </div>}
        </div>
    );
};

export default DropdownEquipments;