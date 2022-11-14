import { NavLink } from 'react-router-dom';
import './HeaderNavigation.scss'
import headerLogo from '../../assets/logo.png'

const HeaderNavigation = () => {
    return (
        <header className="header-navigation">
            <img id='logo-header' src={headerLogo} alt="logo kasa" />
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