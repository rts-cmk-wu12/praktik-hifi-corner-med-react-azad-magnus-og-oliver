import "../style/privacy-policy.scss";
import Footer from "../components/footer"
import Navbar from "../components/navbar"


const PrivacyPage = () => {
    return (
        <>
       <Navbar />
       <div className="privacy-policy-box">
       <div className="pic-in-policy">
        <h1 className="headline-in-policy">Privacy Policy</h1>
        </div>   



        <section className="section-with-healines-and-text">
<h2>It is our policy to conform to the
General Data Protection Regulation
(GDPR) as of 25th May 2018.
 We would like to inform you about your data that we hold and its retention and use.</h2>


<h2>Our data is kept secure and is restricted to your address,phone number and email.</h2>

<p>
We do not store any payment details for security purposes and will not share this with any third-party organisation. Unless legally required, we will not share any of your personal data. If you have agreed for us to use your email you will be added to our customer database. 
</p>

<h3>We use this database to;</h3>
<ul>
    <li> Inform you in the low risk of a product recall</li>
    <li>Contact you about your order status, enquiry or appointment</li>
    <li>Send a digital copy of your proof of purchase</li>
    <li>Provide you with tracking details of an order</li>
    <li> Invite you to promotions and special offers</li>
</ul>
</section>


<section className="section-with-healines-and-text">
<h2>If you do not wish to receive promotional
material such as offers, newsletters,
special discounts or announcements,
you can unsubscribe at any time.</h2>

<h3>However, we may still retain your email address for legitimate interests and legalities such as those listed above.</h3>

<p>
Your address is retained for your product guaranteed warranty and for verifying payment methods and shipments. We may also use your email or phone number when you contact us to confirm appointments.Please email us at: sales@hificorner.co.uk should you wish to have your details amended or deleted at any time, or if you have any further queries.
</p>
</section>
        </div>
       <Footer/>
    </>
    )
}

export default PrivacyPage