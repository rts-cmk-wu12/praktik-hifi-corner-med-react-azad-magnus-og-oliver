import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../style/page/indexpage.scss"
const index = () => {
    return (
        <>
            <div className={"background-navigation"}>
                <Navbar/>
                <main>

                    <section className="index">
                        <div className="index__container">
                            <h2 className="index__title">HI FI</h2>
                        </div>
                        <p className="index__subtitle">HIFICORNER.CO.UK</p>
                    </section>
                </main>
            </div>
            <Footer/>
        </>
    )
}

export default index;