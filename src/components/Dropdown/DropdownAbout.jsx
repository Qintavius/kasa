import { useState, useRef } from 'react';
import './DropdownAbout.scss';
import caret from '../../assets/caret.svg';

const DropdownAbout = (props) => {

    const [show, setShow] = useState(false);

    const parentRef = useRef();

    return (

        <div className="dropdown-about-wrapper">
            
            <div className="dropdown">{props.title}
                <button type='button' onClick={() => setShow(!show)}>
                    {show === true ? <img className='caret caret-open' src={caret} alt="voir" /> : <img className='caret caret-close' src={caret} alt="masquer" />}
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

                <p className="content">{props.content}</p>
            </div>
        </div>
    );
};

export default DropdownAbout;