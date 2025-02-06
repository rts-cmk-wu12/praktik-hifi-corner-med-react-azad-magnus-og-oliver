  import React from 'react';
  import '../style/subscribe-page.scss';
  import Navbar from '../components/navbar';
import Footer from '../components/footer';
  const SubscribePage = () => {
    return (
      <>
        <Navbar />
        <div className="subscribe">
          <div className="subscribe__container">
            <h1 className="subscribe__title">Subscribe To Our Newsletter</h1>
            <div className="subscribe__content">
              <form className="subscribe__form">
                <div className="subscribe__form-group">
                  <input
                    type="name"
                    className="subscribe__input"
                    placeholder="Enter your name"
                    required
                  />
                  <input
                    type="email"
                    className="subscribe__input"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className="subscribe__button">
                    Subscribe
                  </button>
                </div>
                <p className="subscribe__description">
                  Stay updated with our latest news and updates. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  };

  export default SubscribePage;
