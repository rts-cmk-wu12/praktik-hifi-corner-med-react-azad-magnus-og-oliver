import "../style/components/footer.scss"
import { WorldPay, Visa, MasterCard, Jcb, PayPal } from "../GetIcons";
import { Facebook, Youtube, Twitter, Instagram} from "../GetIcons";
import { Link } from 'react-router-dom';

function Footer() {
    return (  
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container-left">
                    <ul className="footer__list">
                        <li className="footer__list-item">Hi-Fi Corner</li>
                        <li className="footer__list-item">Edinburgh 2 Joppa Road EH15 2EU</li>
                        <li className="footer__list-item">Falkirk 44 Cow Wynd FK1 1PU</li>
                    </ul>

                    <div className="footer__links">
                        <Link to="/returns-refunds">
                        <a href="#" className="footer__link">Returns & Refunds <span className="footer__separator">| </span></a>
                        </Link>

                        <Link to="/privacy-policy"> 
                        <a href="#" className="footer__link">Privacy Policy</a> 
                        </Link>
                    </div>
                </div>

                <div className="footer__container-right">
                    <div className="footer__payments">
                        <WorldPay className="footer__payment-icon"/>
                        <Visa className="footer__payment-icon"/>
                        <MasterCard className="footer__payment-icon"/>
                        <Jcb className="footer__payment-icon"/>
                        <PayPal className="footer__payment-icon"/>                    </div>

                    <div className="footer__socials">
                        <a href="#" className="footer__social-link"><Facebook /></a>
                        <a href="#" className="footer__social-link"><Youtube /></a>
                        <a href="#" className="footer__social-link"><Twitter /></a>
                        <a href="#" className="footer__social-link"><Instagram/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;