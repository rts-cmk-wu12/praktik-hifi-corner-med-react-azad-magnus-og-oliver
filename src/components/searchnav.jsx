import { NavLink } from "react-router-dom";
import "../style/components/searchnav.scss"
import { Account, Email, LocationMark, Phone, Cart, Search } from "../GetIcons";
import Logo from "../img/logo-white.svg";
import "../style/main.scss";
import { useState } from 'react';

function SearchNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <div className="searchnav__topnav">
                    <div className="searchnav__logo">
                        <img src={Logo} alt="hifi logo" />
                    </div>
                    <div className="searchnav__search">
                        <div className="searchnav__input-wrapper">
                            <input type="text" className="searchnav__input" placeholder="Search the entire store here..." />
                            <div className="searchnav__icon searchnav__icon--inside">
                                <Search />
                            </div>
                        </div>
                    </div>
                    <p className="searchnav__symbol-account"><Account /> <span className="searchnav__text">Account</span></p>
                    <p className="searchnav__symbol-cart"><Cart /> <span className="searchnav__text">Cart</span></p>
                    <p className="searchnav__symbol"><LocationMark /></p>
                    <p className="searchnav__symbol"><Phone /></p>
                    <p className="searchnav__symbol"><Email /></p>
                </div>
                <nav className="navbar">
                    <div className="burger-menu-cart" onClick={toggleMenu}>
                        <div className={`burger-bar-cart ${isOpen ? 'open' : ''}`}></div>
                        <div className={`burger-bar-cart ${isOpen ? 'open' : ''}`}></div>
                        <div className={`burger-bar-cart ${isOpen ? 'open' : ''}`}></div>
                    </div>
                    <ul className={`navbar__list ${isOpen ? 'open' : ''}`}>
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
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
                            <NavLink to="/shop-category-page"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>SHOP</NavLink>
                        </li>                        <li>
                            <NavLink to="/contact"
                                className={({ isActive }) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>CONTACT</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default SearchNav;