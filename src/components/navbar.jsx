import '../style/components/header.scss'
import '../style/components/header-media.scss'
import { LocationMark, Phone, Email, Email2 } from '../GetIcons.jsx'
import { NavLink } from 'react-router'
import { useState } from 'react'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <div className="topnav">
                    <NavLink className={"navlink"} to= "/contact">
                    <p><LocationMark /></p>
                    <p><Phone /></p>
                    <p><Email /></p>
                    </NavLink>
            
                    <NavLink to="/subscribe" className="topnav__button"><Email2 className='topnav__button-email' /><span className="topnav__black-line">|</span>Subscribe
                    </NavLink>
                </div>
                <nav className="navbar">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
                        <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
                        <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
                    </div>
                    <ul className={`navbar__list ${isOpen ? 'open' : ''}`}>
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>ABOUT
                                US</NavLink>
                        </li>
                        <li>
                            <NavLink to="/brand-page"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>BRANDS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>BLOG</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>EVENTS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop-page"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>SHOP</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>CONTACT</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;