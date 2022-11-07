import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <img id='logoFooter' src="./logoFooter.png" alt="logo Kasa" />
            <p className='footer-txt'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;