import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../style/events-page.scss'
import event1 from '/src/img/event1.jpg'
import event2 from '/src/img/event2.jpg'
import event3 from '/src/img/event3.jpeg'
function Events() {
    return (
        <>
        <Navbar/>
            <section className="events">
                <h1 className="events__title">Events</h1>
                <div className="events__container">
                    <div className="events__card">
                        <img src={event1} alt="Event 1" className="events__image" />
                        <h2 className="events__card-title">Hi-Fi Show Live</h2>
                        <p className="events__card-date">Date: January 1, 2024</p>
                        <p className="events__card-description">Join us for an exclusive demonstration of the latest high-end audio equipment. Experience premium sound quality with our collection of audiophile-grade speakers and amplifiers.</p>
                        <button className="events__card-button">Learn More</button>
                    </div>
                    <div className="events__card">
                        <img src={event2} alt="Event 2" className="events__image" />
                        <h2 className="events__card-title">Vinyl Listening Session</h2>
                        <p className="events__card-date">Date: February 15, 2024</p>
                        <p className="events__card-description">Discover the warmth and richness of vinyl records on our top-of-the-line turntables. Our experts will guide you through the perfect setup for optimal listening experience.</p>
                        <button className="events__card-button">Learn More</button>
                    </div>
                    <div className="events__card">
                        <img src={event3} alt="Event 3" className="events__image" />
                        <h2 className="events__card-title">Audio Workshop</h2>
                        <p className="events__card-date">Date: March 30, 2024</p>
                        <p className="events__card-description">Learn about the latest innovations in audio technology. Our workshop covers everything from speaker placement to room acoustics, helping you achieve the perfect sound in your space.</p>
                        <button className="events__card-button">Learn More</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Events;