import "../style/style.css";


function Footer() {
    return (  
        <footer>
            <div className="footer_container">
                <div className="footer_container_left">
                    <ul>
                        <li>Hi-Fi Corner</li>
                        <li>Edinburgh 2 Joppa Road EH15 2EU</li>
                        <li>Falkirk 44 Cow Wynd FK1 1PU</li>
                    </ul>

                    <div>
                        <a href="#">Returns & Refunds <span>|</span></a> <a href="#">Privacy Policy</a> 
                    </div>
                </div>

                <div className="footer_container_right">
                    <div className="footer_container_right_payments">
                        <img src="footerpics/worldpay.png" alt="" />
                        <img src="footerpics/visa.png" alt="" />
                        <img src="footerpics/mastercard.png" alt="" />
                        <img src="footerpics/maestro.png" alt="" />
                        <img src="footerpics/jcb.png" alt="" />
                        <img src="footerpics/brand-paypal.png" alt="" />
                    </div>

                    <div className="footer_container_right_socials">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;