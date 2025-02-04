import '../style/components/header.scss'
import {LocationMark, Phone, Email} from '../GetIcons.jsx'
import {NavLink} from 'react-router'

function Navbar() {
    return (
        <>
            <header>
                <div className="topnav">
                    <p><LocationMark/></p>
                    <p><Phone/></p>
                    <p><Email/></p>
                    <button className="topnav__button"><Email/><span className="topnav__black-line">|</span>Subscribe
                    </button>
                </div>
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                                     className={({isActive}) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>ABOUT
                                US</NavLink>
                        </li>
                        <li>
                            <NavLink to="/brand-page"
                                     className={({isActive}) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>BRANDS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog"
                                     className={({isActive}) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>BLOG</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events"
                                     className={({isActive}) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>EVENTS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product-page"
                                     className={({isActive}) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>SHOP</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"
                                     className={({isActive}) => `navbar__link navbar__link${isActive ? '--active' : ''}`}>CONTACT</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;