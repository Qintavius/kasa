import React from 'react';
import './Footer.scss';
import logo from '../../assets/logoFooter.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <img id='logoFooter' src={logo} alt="logo Kasa" />
            <p className='footer-txt'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;