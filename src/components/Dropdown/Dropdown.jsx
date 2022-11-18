import { useState, useRef } from 'react';
import './Dropdown.scss';
import caret from '../../assets/caret.svg';

const Dropdown = ({title, children}) => {

    const [show, setShow] = useState(false);

    const parentRef = useRef();

    return (
        
        <div className='dropdown-wrapper'>
            
            <div className="dropdown">{title}
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

                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;