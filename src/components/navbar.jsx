import '../style/style.scss'
import { LocationMark, Phone, Email } from '../GetIcons.jsx'

function Navbar() {
    return (
        <>
            <header>
                <div className="topnav">
                    <p><LocationMark /></p>
                    <p><Phone /></p>
                    <p><Email /></p>
                    <button className="topnav__button"><Email /><span className="topnav__black-line">|</span>Subscribe</button>
                </div>
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li><a className="navbar__link navbar__link--active" href="/">HOME</a></li>
                        <li><a className="navbar__link" href="/about">ABOUT US</a></li>
                        <li><a className="navbar__link" href="/brand-page">BRANDS</a></li>
                        <li><a className="navbar__link" href="/blog">BLOG</a></li>
                        <li><a className="navbar__link" href="/events">EVENTS</a></li>
                        <li><a className="navbar__link" href="/product-page">SHOP</a></li>
                        <li><a className="navbar__link" href="/contact">CONTACT US</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;