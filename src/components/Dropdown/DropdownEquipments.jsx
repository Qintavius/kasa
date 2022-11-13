import React from 'react';
import { useState, useRef } from 'react';
import './DropdownEquipements.scss';
import caret from '../../assets/caret.svg';

const DropdownEquipments = (props) => {

    const [show, setShow] = useState(false);

    const parentRef = useRef();

    return (
        
        <div className='dropdown-wrapper'>
            
            <div className="dropdown">{props.title}
                <button type='button' onClick={() => setShow(!show)}>
                    {show === true ? <img className='caret caret-open' src={caret} alt="voir les équipements" /> : <img className='caret caret-close' src={caret} alt="masquer les équipements" />}
                </button>
            </div>

            <div className="dropdown-content" 
                ref={parentRef} 
                style={
                    show 
                    ? {
                        height: parentRef.current.scrollHeight + "px",
                    } 
                    : {
                        height: "0px",
                      }
                }>
                
                <ul>
                    {
                        props.equipments && props.equipments.map((equip, index) => {
                            return <li className='equipment' key={'equipment' + index}>{equip}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default DropdownEquipments;