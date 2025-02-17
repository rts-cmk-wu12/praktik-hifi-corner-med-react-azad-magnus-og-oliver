import {Link} from 'react-router';

export const ExploreSection = () => {
    return (
        <div className="explore-section">
            <div className="explore-section__content">
                <h3 className="explore-section__title"><Link to={"about-us"}>History</Link></h3>
                <p className="explore-section__paragraph">Established in the late 1960s, our family owned business is based in Edinburgh and Falkirk, servicing
                    customers across the UK.</p>
            </div>
            <div className="explore-section__content">
                <h3 className="explore-section__title"><Link to={"contact"}>News</Link></h3>
                <p className="explore-section__paragraph">Check out our latest news stories for all the up to date Hi-Fi Corner products and launches.</p>
            </div>
            <div className="explore-section__content">
                <h3 className="explore-section__title"><Link to={"shop-page"}>Shop</Link></h3>
                <p className="explore-section__paragraph">Have a look in our online shop for great products and deals.</p>
            </div>
        </div>
    )
}