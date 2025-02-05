import Footer from "../components/footer"
import Navbar from "../components/navbar"
import brands from "../img/brands.png"
import "../style/main.scss"
import Logo from "../img/logo-white.svg"
const BrandPage = () => {
    return (
        <>
            <Navbar />
            <main className="brand">
                <section className="brand__container">
                    <article className="brand__top">
                        <h2 className="brand__top-text">TOP BRANDS</h2>
                        <img src={Logo} alt="" />
                        {/* <div className="brand__hero">
                           <div className="hero__centerDiv">
                            <div className="hero__textBox">
                                <h1 className="hero__heading">HI <br /> FI
                                </h1>
                            </div>
                            <p className="hero__text">HIFICORNER.CO.UK</p>
                        </div> 
                        </div> */}
                        
                    </article>

                    <section className="brand__section">
                        <div className="brand__section-container">
                        <div className="brand__section-flex">
                            <section className="brand__subsection">
                                <article className="brand__logos">
                                    <p>Here are just a few of the brands we stock:</p>
                                    <div>
                                        <img src={brands} alt="" />
                                    </div>
                                </article>
                            </section>
                            <article className="brand__content">
                                <section className="brand__text">
                                    <h4 className="brand__text-heading">Brands</h4>
                                    <div>
                                        <p>As an independent retailer of home audio and visual products, we are able to select the
                                            very best brands and manufacturers from across the world.</p>
                                        <p>Not only do we have the best known brands such as B&W, Devialet, KEF, Naim and Linn; we
                                            also stock and are well versed with smaller autonomous companies like Michell
                                            Engineering, Neat Acoustics, Harbeth, SME, Trichord Research, PrimaLuna, to name but a
                                            few.</p>
                                        <p>With over a hundred brands, we can happily say that if a brand meets our high standards
                                            for sound reproduction, then you can be assured to find it at Hi-Fi Corner.</p>
                                        <a className="brand__link" href="/shop-page">VISIT OUR SHOP TO FIND MORE BRANDS </a>
                                    </div>
                                </section>
                            </article>
                        </div>
                        </div>
                        
                    </section>
                </section>
            </main>

            <Footer />
        </>
    )
}
export default BrandPage