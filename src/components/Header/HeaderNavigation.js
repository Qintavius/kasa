import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNavigation.scss'

const HeaderNavigation = () => {
    return (
        <header className="headerNavigation">
            <img id='logo-header' src="./logo.png" alt="logo kasa" />
            <ul className='navigation'>
                <NavLink to='/'>
                    <li>accueil</li>
                </NavLink>
                <NavLink to='/about'>
                    <li>à propos</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default HeaderNavigation;