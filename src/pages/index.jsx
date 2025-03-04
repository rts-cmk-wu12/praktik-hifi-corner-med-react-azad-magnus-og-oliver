import Footer from "~components/footer";
import Navbar from "~components/navbar";
import "~style/page/indexpage.scss";
import {Carousel} from "~components/carousel.jsx";
import Logo from "~img/logo-white.svg";
import {Socialcomponent} from "~components/socialcomponent.jsx";
import {ExploreSection} from "~components/explore-section.jsx";

const IndexPage = () => {
    return (
        <>
            <div className={"background-navigation"}>
                <Navbar/>
                <main>

                    <section className="index">
                        <div className="index__container">
                            <img src={Logo} alt="" />
                        </div>
                        
                    </section>
                </main>
            </div>
            <section className="image-section">
                <h2 className="image-section__title">OUR EDINBURGH SHOWROOM HAS NOW MOVED TO STUNNING NEW PREMISES ON JOPPA ROAD</h2>
            </section>

           <Carousel/>

            <Socialcomponent></Socialcomponent>
            <ExploreSection></ExploreSection>
            <Footer/>
        </>
    )
}

export default IndexPage;