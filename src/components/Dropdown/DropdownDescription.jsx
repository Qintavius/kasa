import { useState, useRef } from 'react';
import './DropdownDescription.scss';
import caret from '../../assets/caret.svg';

const DropdownDescription = (props) => {
    
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

                <p>{props.description}</p>
            </div>
            
        </div>
    );
};

export default DropdownDescription;