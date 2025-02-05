import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import "../style/contact.scss";
import Navbar from "../components/navbar"
import Footer from "../components/footer"


const Contact = () => {
    return (
        
        <>

<Navbar />
          <h1 className="headline-in-contact">Get in Touch </h1>
       <div className="contact-information-section">
  
  <div className="contact-information-wrapper"> 
    <address>
   
        <p className="city-name"><>Edinburgh</> </p>
        <p><CiPhone /> <a className="a-tags-in-contact" href="0131 556 7901">0131 556 7901</a></p>
        <p><CiMail /> <a className="a-tags-in-contact" href="mailto:sales@hificorner.co.uk">sales@hificorner.co.uk</a></p>
        <p><><CiLocationOn /></> 2 Joppa Rd, Edinburgh, EH15 2EU</p>
        <p><><CiClock2 /></> Mon - Sat: 10am - 5:30pm, Sun closed</p>
    </address>


<div className="maps-section">

<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.987499666719!2d-3.1028486234002846!3d55.94958857315767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b9a456988e37%3A0x9ab320c7a137c00!2s2%20Joppa%20Rd.%2C%20Edinburgh%20EH15%202EU%2C%20Storbritannien!5e0!3m2!1sda!2sdk!4v1738743880905!5m2!1sda!2sdk"
    ></iframe>
    </div>
</div>
</div>

<div className="contact-information-section">
  
  <div className="contact-information-wrapper"> 
    <address>
   
        <p className="city-name"><>Falkirk </> </p>
        <p><></>  </p>
        <p><CiPhone /> <a className="a-tags-in-contact"  href="01324 629 011">01324 629 011</a></p>
        <p><CiMail /> <a className="a-tags-in-contact" href="mailto:falkirk@hificorner.co.uk">falkirk@hificorner.co.uk</a></p>
        <p><><CiLocationOn /></> 44 Cow Wynd, Falkirk Central Region, FK1 1PU</p>
        <p><><CiClock2 /></> Mon - Sat: 10am -5:30pm. Sat appointment only. Sun closed.</p>
    </address>


<div className="maps-section">

<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2231.2172149863513!2d-3.785564022768693!3d55.99759007310992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48887a24df9c1377%3A0xd0bf6627c034e3ac!2s44%20Cow%20Wynd%2C%20Falkirk%20FK1%201PU%2C%20Storbritannien!5e0!3m2!1sda!2sdk!4v1738749044115!5m2!1sda!2sdk"
    ></iframe>
    </div>
</div>
</div>
<Footer/>
        </>
    )
}

export default Contact